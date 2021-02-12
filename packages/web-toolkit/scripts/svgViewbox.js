/*
 * svgViewbox.js
 */

const util = require('util')
const path = require('path')
const fs = require('fs')
const { xml2js, js2xml } = require('xml-js')

const iconDirectory = path.join(__dirname, '../src/assets/icons')
const iconFilenames = fs.readdirSync(iconDirectory)

const filepaths = iconFilenames.map(f => path.join(iconDirectory, f))

Promise.all(filepaths.map(async filepath => {
  const content = await fs.promises.readFile(filepath)
  const xml = content.toString()
  const doc = xml2js(xml)
  doc.elements = doc.elements.filter(e => e.type !== 'comment')

  const first = doc.elements[0]

  if (!first)
    return { ok: false, filepath, message: 'No elements', doc }

  if (first.name !== 'svg')
    return { ok: false, filepath, message: 'Couldnt find SVG', doc }

  const attributes = first.attributes
  if (!attributes.width || !attributes.height) {
    if (attributes.viewBox)
      return { ok: true, filepath }
    return { ok: false, filepath, message: 'No dimensions', doc }
  }

  attributes.viewBox = `0 0 ${attributes.width} ${attributes.height}`
  delete attributes.width
  delete attributes.height

  const newContent = js2xml(doc)

  await fs.promises.writeFile(filepath, newContent)

  return { ok: true, filepath }
}))
.then(results => {
  const failures = results.filter(r => r.ok === false)
  console.log(util.inspect(failures, { colors: true, depth: 5 }))
})
