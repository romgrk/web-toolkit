/*
 * fixBabelRuntime.js
 */

const util = require('util')
util.inspect.defaultOptions = {
  colors: true,
  depth: 2
}

module.exports = function(fileInfo, api, options) {
  const i = api.jscodeshift(fileInfo.source)

  return i.find(api.j.VariableDeclaration)
    .replaceWith((node, ...rest) => {
      const name = node.value.declarations[0].id.name
      const init = node.value.declarations[0].init
      if (name === '_interopRequireWildcard') {
        init.arguments[0].value = '@babel/runtime/helpers/interopRequireWildcard'
        init.arguments[0].raw = '"@babel/runtime/helpers/interopRequireWildcard"'
      }
      if (name === '_interopRequireDefault') {
        init.arguments[0].value = '@babel/runtime/helpers/interopRequireDefault'
        init.arguments[0].raw = '"@babel/runtime/helpers/interopRequireDefault"'
      }
      return node.value
    })
    .toSource()
};
