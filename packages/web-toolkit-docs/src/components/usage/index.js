const requireModule = require.context("./", false, /\.js$/)
const api = {}

requireModule.keys().forEach(filename => {
  if (filename === './index.js')
    return

  const moduleName = filename.replace(/(\.\/|\.js)/g, '')
  api[moduleName] = requireModule(filename).default
})

export default api;
