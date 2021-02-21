/*
 * parsePropTypes.js
 */

const fs = require('fs')
const path = require('path')
const { map } = require('rambda')
const meriyah = require('meriyah')
const { walk } = require('estree-walker')
const escope = require('escope')
const getParent = require('./estree-get-parent')

const metadataPath  = path.join(__dirname, '../src/properties.json')
const baseDir       = path.join(__dirname, '../../web-toolkit/')
const componentsDir = path.join(__dirname, '../../web-toolkit/src/lib/components')
const componentFilepaths = fs.readdirSync(componentsDir).map(f => path.join(componentsDir, f))


// { // Test one
//   const filepath = path.join(componentsDir, 'Input.js')
//   const moduleExports = parsePropTypes(filepath)
//   console.log(moduleExports)
//   console.log(JSON.stringify(serialize(moduleExports)))
//   debugger
// }

{ // Run for all
  const metadata = Object.fromEntries(componentFilepaths.map(filepath => {
    const name = path.basename(filepath).replace('.js', '')
    const sourcePath = filepath.replace(baseDir, '')
    const moduleExports = serialize(parsePropTypes(filepath))
    return [name, { name, sourcePath, exports: moduleExports }]
  }))
  fs.writeFileSync(metadataPath, JSON.stringify(metadata))
  console.log('Metadata written to ' + metadataPath)
}


function parsePropTypes(filepath) {
  const comments = []
  const text = fs.readFileSync(filepath).toString()
  const lines = text.split('\n')
  const source = { text, lines }
  const ast = meriyah.parseModule(source.text, {
    ranges: true,
    next: true,
    jsx: true,
    loc: true,
    onComment: comments,
  })
  const scopeManager = escope.analyze(ast, {
    ecmaVersion: 6,
    sourceType: 'module',
  })
  
  const context = { ast, scopeManager, source }

  const moduleExports = buildExports(context)

  // console.log('\n\n------ SCOPES ------\n\n')
  // walkWithScope(ast, scopeManager, {
  //   enter: (node, parent, prop, index, scope, api) => {
  //     console.log(node)
  //     console.log(scope)
  //   }
  // })

  return moduleExports
}

function buildExports(context) {
  let moduleExports = {}

  walkWithScope(context, {
    enter: (node, parent, prop, index, scope, api) => {
      if (node.type === 'ExportDefaultDeclaration') {
        moduleExports.default = buildExport(node.declaration, scope, context)
      }
      else if (node.type === 'ExportNamedDeclaration') {
        switch (node.declaration.type) {
          case 'VariableDeclaration':
            node.declaration.declarations.forEach(node => {
              if (isComponent(node))
                moduleExports[node.id.name] = buildExport(node, scope, context)
            })
            break;
          case 'FunctionDeclaration':
            if (isComponent(node.declaration))
              moduleExports[node.declaration.id.name] =
                buildExport(node.declaration, scope, context)
            break;
          default:
            console.log(node)
            throw new Error('Unknown export type')
        }
      }
    }
  })

  return moduleExports
}

function buildExport(node, scope, context) {
  const name = getName(node)
  const instance = scope.set.get(name)
  assert(instance.defs.length === 1)
  const definition = instance.defs[0]
  const references = instance.references

  const fields = {}

  references.forEach(ref => {
    const node = ref.identifier
    const parent = getParent(node, context.ast)
    if (parent.type === 'VariableDeclarator')
      return // skip declaration

    // console.log('----')
    // console.log(node, getSourceLine(node, context))
    // console.log(parent)

    if (parent.type === 'MemberExpression') {
      const fieldName = parent.property.name
      const expression = getParent(parent, context.ast)

      // we want only assignments to our reference, not the other
      // way around:
      //   Input.propTypes = { ... } <--- yes
      //   const Component = Input   <--- no
      if (!contains(expression.id || expression.left, node))
        return

      // console.log(expression)
      assert(expression.type === 'AssignmentExpression')

      let value = expression.right
      if (value.type === 'Identifier') {
        // eg: Input.propTypes = propTypes;
        const definition = getDefinition(value, context)
        value = definition.init
      }
      else if (value.type === 'ObjectExpression') {
        // eg: Input.propTypes = { ... };
        // value = value
      }
      else if (value.type === 'MemberExpression') {
        // eg: Dropdown.Item = Menu.Item;
        // value = value
      }
      else if (value.type === 'CallExpression') {
        // eg: ExportedInput.Group = forwardRef(Group)
        // value = value
        // XXX: check if other cases hit this branch
      }
      else {
        debugger
        assert(false)
      }

      fields[fieldName] = value
    }
  })

  const propTypes =
    fields.propTypes && buildPropTypes(fields.propTypes, context)
  const defaultProps =
    fields.defaultProps && buildDefaultProps(fields.defaultProps, context)

  return {
    node,
    fields,
    propTypes,
    defaultProps,
  }
}

function getDefinition(node, context) {
  let parent = node
  do  {
    parent = getParent(parent, context.ast)
  } while (parent && !hasScope(parent))
  assert(parent)

  const name = getName(node)
  const scope = getScope(parent, context)

  const instance = scope.set.get(name)
  assert(instance.defs.length === 1)
  const definition = instance.defs[0]
  // const references = instance.references

  return definition.node
}

function buildPropTypes(node, context) {
  const propTypes = {}

  node.properties.forEach(node => {
    const name = getName(node.key)
    const value = node.value
    const text = getSourceText(value, context)
    propTypes[name] = { node: value, text }
  })

  return propTypes
}

function buildDefaultProps(node, context) {
  const defaultProps = {}

  node.properties.forEach(node => {
    const name = getName(node.key)
    const value = node.value
    const text = getSourceText(value, context)
    defaultProps[name] = { node: value, text }
  })

  return defaultProps
}

function isComponent(node) {
  return /^[A-Z]/.test(node.id.name)
}

function getName(node) {
  switch (node.type) {
    case 'Identifier': return node.name
    case 'VariableDeclarator': return node.id.name
    case 'FunctionDeclaration': return node.id.name
    case 'Literal': return node.value
    default:
      throw new Error('Unknown node type')
  }
}

function hasScope(node) {
  return /Function|Program/.test(node.type)
}

function walkWithScope(context, options) {
  let currentScope = getScope(context.ast, context)

  walk(context.ast, {
    enter(node, parent, prop, index) {
      options.enter?.(node, parent, prop, index, currentScope, this)
      if (hasScope(node.type)) {
        currentScope = getScope(node, context)
      }
    },
    leave(node, parent, prop, index) {
      if (hasScope(node.type)) {
        currentScope = currentScope.upper
      }
      options.leave?.(node, parent, prop, index, currentScope, this)
    }
  })
}

function getScope(node, context) {
  const scope = context.scopeManager.acquire(context.ast)
  // ProgramScope.childScopes[0] === ModuleScope
  if (scope.type === 'global')
    return scope.childScopes[0]
  return scope
}

function contains(parent, child) {
  let didFind = {}
  try {
    walk(parent, {
      enter(node) {
        if (node === child)
          throw didFind
      },
    })
  } catch(err) {
    if (err === didFind)
      return true
    throw err
  }
  return false
}

function getSourceLine(node, context) {
  return context.source.lines.slice(node.loc.start.line - 1, node.loc.end.line).join('\n')
}

function getSourceText(node, context) {
  return context.source.text.slice(node.start, node.end)
}

function assert(condition, message = 'Failed assertion') {
  if (!condition)
    throw new Error(message)
}

function serialize(moduleExports) {
  const result = {}
  Object.keys(moduleExports).forEach(key => {
    const value = moduleExports[key]
    const { propTypes, defaultProps } = value
    result[key] = {
      propTypes: propTypes && map(n => n.text, propTypes),
      defaultProps: defaultProps && map(n => n.text, defaultProps),
    }
  })
  return result
}
