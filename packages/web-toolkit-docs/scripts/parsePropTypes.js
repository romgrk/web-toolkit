/*
 * parsePropTypes.js
 */

const fs = require('fs')
const path = require('path')
const meriyah = require('meriyah')
const { walk } = require('estree-walker')
const escope = require('escope')

const filepath = path.join(__dirname, '../../web-toolkit/src/lib/components/Input.js')

parsePropTypes(filepath)

function parsePropTypes(filepath) {
  const comments = []
  const code = fs.readFileSync(filepath).toString()
  const ast = meriyah.parseModule(code, {
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

  const moduleExports = buildExports(ast, scopeManager)

  console.log(moduleExports)

  console.log('\n\n------ SCOPES ------\n\n')
  walkWithScope(ast, scopeManager, {
    enter: (node, parent, prop, index, scope, api) => {
      console.log(node)
      console.log(scope)
    }
  })
}

function buildExports(ast, scopeManager) {
  let moduleExports = {}

  walkWithScope(ast, scopeManager, {
    enter: (node, parent, prop, index, scope, api) => {
      if (node.type === 'ExportDefaultDeclaration') {
        moduleExports.default = { node }
      }
      else if (node.type === 'ExportNamedDeclaration') {
        console.log(node)
        switch (node.declaration.type) {
          case 'VariableDeclaration':
            node.declaration.declarations.forEach(node => {
              moduleExports[node.id.name] = { node }
            })
            break;
          case 'FunctionDeclaration':
            moduleExports[node.declaration.id.name] = { node: node.declaration }
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

function walkWithScope(ast, scopeManager, options) {
  let currentScope
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
