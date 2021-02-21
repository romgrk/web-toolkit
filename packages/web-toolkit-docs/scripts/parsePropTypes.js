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
  const code = fs.readFileSync(filepath).toString()
  const ast = meriyah.parseModule(code, {
    ranges: true,
    next: true,
    jsx: true,
  })
  const scopeManager = escope.analyze(ast, {
    ecmaVersion: 6,
    sourceType: 'module',
  })

  console.log(ast)

  let moduleExports = {}

  let currentScope

  walk(ast, {
    enter(node, parent, prop, index) {
      if (node.type === 'ExporDefaultDeclaration') {
        moduleExports.default = node
      }
      else if (node.type === 'ExportNamedDeclaration') {
        console.log(node)
        switch (node.declaration.type) {
          case 'VariableDeclaration':
            node.declaration.declarations.forEach(node => {
              moduleExports[node.id.name] = node
            })
            break;
          case 'FunctionDeclaration':
            moduleExports[node.declaration.id.name] = node.declaration
            break;
          default:
            console.log(node)
            throw new Error('Unknown export type')
        }
      }

      if (/Function/.test(node.type)) {
        currentScope = scopeManager.acquire(node)
      }
    },
    leave: function(node, parent) {
      if (/Function/.test(node.type)) {
        currentScope = currentScope.upper
      }
      // code
    }
  })
}
