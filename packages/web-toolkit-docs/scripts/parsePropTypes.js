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

const metadataPath  = path.join(__dirname, 'metadata.json')
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

  const moduleExports = buildExports(ast, scopeManager, source)

  // console.log('\n\n------ SCOPES ------\n\n')
  // walkWithScope(ast, scopeManager, {
  //   enter: (node, parent, prop, index, scope, api) => {
  //     console.log(node)
  //     console.log(scope)
  //   }
  // })

  return moduleExports
}

function buildExports(ast, scopeManager, source) {
  let moduleExports = {}

  walkWithScope(ast, scopeManager, {
    enter: (node, parent, prop, index, scope, api) => {
      if (node.type === 'ExportDefaultDeclaration') {
        moduleExports.default = buildExport(node.declaration, scope, ast, source)
      }
      else if (node.type === 'ExportNamedDeclaration') {
        console.log(node)
        switch (node.declaration.type) {
          case 'VariableDeclaration':
            node.declaration.declarations.forEach(node => {
              if (isComponent(node))
                moduleExports[node.id.name] = buildExport(node, scope, ast, source)
            })
            break;
          case 'FunctionDeclaration':
            if (isComponent(node.declaration))
              moduleExports[node.declaration.id.name] =
                buildExport(node.declaration, scope, ast, source)
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

function buildExport(node, scope, ast, source) {
  const name = getName(node)
  const instance = scope.set.get(name)
  assert(instance.defs.length === 1)
  const definition = instance.defs[0]
  const references = instance.references

  const fields = {}

  references.forEach(ref => {
    const node = ref.identifier
    const parent = getParent(node, ast)
    if (parent.type === 'VariableDeclarator')
      return // skip declaration
    console.log('----')
    console.log(node, getSourceLine(node, source))
    console.log(parent)

    if (parent.type === 'MemberExpression') {
      const fieldName = parent.property.name
      const expression = getParent(parent, ast)
      console.log(expression)
      assert(expression.type === 'AssignmentExpression')
      const value = expression.right
      fields[fieldName] = value
    }
  })

  const propTypes =
    fields.propTypes && buildPropTypes(fields.propTypes, ast, source)
  const defaultProps =
    fields.defaultProps && buildDefaultProps(fields.defaultProps, ast, source)

  return {
    node,
    fields,
    propTypes,
    defaultProps,
  }
}

function buildPropTypes(node, ast, source) {
  const propTypes = {}

  node.properties.forEach(node => {
    const name = getName(node.key)
    const value = node.value
    const text = getSourceText(value, source)
    propTypes[name] = { node: value, text }
  })

  return propTypes
}

function buildDefaultProps(node, ast, source) {
  const defaultProps = {}

  node.properties.forEach(node => {
    const name = getName(node.key)
    const value = node.value
    const text = getSourceText(value, source)
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
    default:
      throw new Error('Unknown node type')
  }
}

function walkWithScope(ast, scopeManager, options) {
  let currentScope = scopeManager.acquire(ast)
  walk(ast, {
    enter(node, parent, prop, index) {
      options.enter?.(node, parent, prop, index, currentScope, this)
      if (/Function/.test(node.type)) {
        currentScope = scopeManager.acquire(node)
      }
    },
    leave(node, parent, prop, index) {
      if (/Function/.test(node.type)) {
        currentScope = currentScope.upper
      }
      options.leave?.(node, parent, prop, index, currentScope, this)
    }
  })
}

function getSourceLine(node, source) {
  return source.lines.slice(node.loc.start.line - 1, node.loc.end.line).join('\n')
}

function getSourceText(node, source) {
  return source.text.slice(node.start, node.end)
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
