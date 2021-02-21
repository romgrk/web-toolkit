/*
 * estree-get-parent.js
 */

const step = require('estree-walk').step

module.exports = getParent

getParent.ancestors = ancestors
getParent._parents = new WeakMap()
const parents = getParent._parents

function getParent(node, source) {
  // Handle no `source` param or `node.parent`:
  if (!source || node.parent) {
    return node.parent || null
  }

  // Get parent from cache:
  var parent = parents.get(node)
  if (!parent) {
    // Create missing cache:
    for (var pending = [source]; pending.length;) {
      var select = pending.pop()
      var start = pending.length
      step(select, pending)
      var end = pending.length
      while (end > start) {
        var child = pending[start++]
        parents.set(child, select)
        if (child === node) {
          parent = select
        }
      }
    }
  }

  return parent || null
}


function ancestors (node, source) {
  // Create an array of ancestors:
  for (var ancestors = [], ancestor = node; ancestor;) {
    if (ancestor = parent(ancestor, source)) {
      ancestors.push(ancestor)
    }
  }
  return ancestors
}
