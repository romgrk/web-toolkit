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
//   const filepath = path.join(componentsDir, 'Radio.js')
//   // const filepath = path.join(componentsDir, 'Input.js')
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
    directives: true,
    onComment: (type, value, start, end, loc) => {
      comments.push({
        type: type + 'Comment',
        value,
        start,
        end,
        range: [start, end],
        loc,
      })
    },
  })
  const scopeManager = escope.analyze(ast, {
    ecmaVersion: 6,
    sourceType: 'module',
  })

  const context = { ast, scopeManager, source, comments, filepath }
  attachComments(context)

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

function attachComments(context) {
  const nodePositions    = Array(context.ast.end).fill(null)
  const commentPositions = Array(context.ast.end).fill(null)

  const skipNode = new Set([
    'Identifier',
  ])

  walk(context.ast, {
    enter(node, parent, prop, index) {
      if (skipNode.has(node.type))
        return
      nodePositions[node.start] = node
    }
  })

  context.comments.forEach(node => {
    node.comment = true
    for (let i = node.start; i < node.end; i++) {
      commentPositions[i] = node
    }
  })

  for (let i = 0; i < commentPositions.length; i++) {
    const comment = commentPositions[i]
    if (!comment)
      continue

    // console.log(i, comment)
    // console.log()

    // Attach node
    for (; i < commentPositions.length; i++) {
      const node = nodePositions[i]
      if (!node)
        continue
      // console.log(node, getSourceLine(node, context))
      node.comment = comment
      break
    }

    // Advance until end of comment
    for (; i < commentPositions.length; i++) {
      if (comment !== commentPositions[i])
        break
    }
  }
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
  if (node.type === 'ImportDefaultSpecifier')
    return { external: true, name: getName(node) }

  // ExportedInput.Group = forwardRef(Group)
  if (node.type === 'CallExpression' && node.callee.name === 'forwardRef')
    node = node.arguments[0]

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
        switch(definition.type) {
          case 'VariableDeclarator': value = definition.init; break
          case 'FunctionDeclaration': value = definition; break
          case 'ImportDefaultSpecifier': value = definition; break
          default: assert(false)
        }
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

  // Check static fields
  if (definition.node.type === 'ClassDeclaration') {
    const classFields = definition.node.body.body
    const staticFields = classFields.filter(f => f.type === 'PropertyDefinition' && f.static)
    staticFields.forEach(f => {
      fields[getName(f.key)] = f.value
    })
  }
  else if (definition.node.type !== 'FunctionDeclaration'
        && definition.node.type !== 'VariableDeclarator') {
    debugger
    assert(false)
  }


  const propTypes =
    fields.propTypes && buildPropTypes(fields.propTypes, context)
  const defaultProps =
    fields.defaultProps && buildDefaultProps(fields.defaultProps, context)

  const subExports = {}
  Object.keys(fields).filter(isComponent).forEach(componentName => {
    const node = fields[componentName]
    // import Menu from './Menu'
    // Dropdown.Menu = Menu.Item <-----no
    if (node.type === 'MemberExpression') {
      subExports[componentName] = { external: true, name: getSourceText(node, context) }
    }
    // function Group() {...}
    // Radio.Group = Group <-----yes
    else {
      subExports[componentName] = buildExport(node, scope, context)
    }
  })

  return {
    node,
    fields,
    propTypes,
    defaultProps,
    exports: subExports,
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
    const comment = node.comment ? parseJSDocComment(node.comment) : {}
    propTypes[name] = {
      node: value,
      text,
      comment,
    }
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
  return /^[A-Z]/.test(typeof node === 'string' ? node : getName(node))
}

function getName(node) {
  switch (node.type) {
    case 'Identifier': return node.name
    case 'VariableDeclarator': return node.id.name
    case 'FunctionDeclaration': return node.id.name
    case 'Literal': return node.value
    case 'ImportDefaultSpecifier': return node.local.name
    default:
      throw new Error('Unknown node type')
  }
}

function hasScope(node) {
  return /Function|Program/.test(node.type)
}

function isComment(node) {
  return /Comment/.test(node.type)
}

function parseJSDocComment(comment) {
  assert(comment.type === 'MultiLineComment')
  // eg "* className of the component"
  const text =
    comment.value.split('\n')
      .map(line => line.replace(/^\s*\*/, '').trim())
      .join('\n')
  // for now, only trim the text and return
  return {
    text: text,
  }
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
  const scope = context.scopeManager.acquire(node)
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
    const x = moduleExports[key]

    if (x.external) {
      result[key] = x // { external: true, name: 'Menu.Item' }
      return
    }

    result[key] = {
      lineNumber: x.node.loc.start.line,
      propTypes: x.propTypes && serializePropTypes(x.propTypes),
      defaultProps: x.defaultProps && serializeDefaultProps(x.defaultProps),
      exports: x.exports && serialize(x.exports),
    }
  })

  return result
}

function serializePropTypes(propTypes) {
  return map(n => ({
    value: n.text,
    required: n.text.trim().endsWith('isRequired'),
    description: n.comment.text
  }), propTypes)
}

function serializeDefaultProps(defaultProps) {
  return map(n => ({
    value: n.text,
  }), defaultProps)
}
