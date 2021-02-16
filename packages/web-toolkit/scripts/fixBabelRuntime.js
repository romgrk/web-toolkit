/*
 * fixBabelRuntime.js
 */

const util = require('util')
util.inspect.defaultOptions = {
  colors: true,
  depth: 2,
  maxArrayLength: Infinity,
}

module.exports = function(fileInfo, api, options) {
  const i = api.jscodeshift(fileInfo.source)

  // console.log(Object.keys(api.j))

  return i.find(api.j.CallExpression)
    .replaceWith((node, ...rest) => {
      if (node.value.callee.name !== 'require')
        return node.value
      const arg = node.value.arguments[0]
      const moduleName = arg.value
      const pos = moduleName.lastIndexOf('@babel/runtime')
      if (pos === -1)
        return node.value
      const partialName = moduleName.slice(pos)
      // console.log([node.value.callee.name, moduleName, partialName])

      arg.value = partialName
      arg.raw = `"${partialName}"`
      return node.value
    })
    .toSource()
};
