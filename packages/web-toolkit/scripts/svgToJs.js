/*
 * svgToJs.js
 */


const util = require('util')
const path = require('path')
const fs = require('fs')
const rimraf = require('rimraf')
const mkdirp = require('mkdirp')
const svgr = require('@svgr/core').default


const iconDirectorySVG = path.join(__dirname, '../src/lib/assets/icons')
const iconDirectoryJS  = path.join(__dirname, '../src/lib/icons')
const iconFilenames = fs.readdirSync(iconDirectorySVG)

rimraf.sync(iconDirectoryJS)
mkdirp.sync(iconDirectoryJS)

Promise.all(iconFilenames.map(async filename => {
  const svgPath = path.join(iconDirectorySVG, filename)
  const jsPath  = path.join(iconDirectoryJS, filename).replace('.svg', '.js')

  const svgCode = (await fs.promises.readFile(svgPath)).toString()
  const jsCode = await svgr(svgCode, { icon: true })

  await fs.promises.writeFile(jsPath, jsCode)

  return { ok: true, filename }
}))
.then(results => {
  const failures = results.filter(r => r.ok === false)
  console.log(util.inspect(failures, { colors: true, depth: 5 }))
})
