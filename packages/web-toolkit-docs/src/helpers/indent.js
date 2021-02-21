/*
 * indent.js
 */

export default function indent(code) {
  const lines = code.split('\n').filter(l => !/^\s*$/.test(l))

  let smallestIndent = Infinity
  lines.forEach(l => {
    const spaces = l.match(/^\s*/)[0]
    if (spaces.length < smallestIndent)
      smallestIndent = spaces.length
  })

  const remove = ' '.repeat(smallestIndent)

  return lines.map(l => l.replace(remove, '')).join('\n')
}
