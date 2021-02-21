/*
 * indent.js
 */

export default function indent(code) {
  const lines = code.split('\n')

  while (lines.length && isWhitespace(lines[0])) {
    lines.shift()
  }
  while (lines.length && isWhitespace(lines[lines.length - 1])) {
    lines.pop()
  }

  let smallestIndent = Infinity
  lines.forEach(l => {
    const spaces = l.match(/^\s*/)[0]
    if (isWhitespace(l))
      return
    if (spaces.length < smallestIndent)
      smallestIndent = spaces.length
  })

  const remove = ' '.repeat(smallestIndent)

  return lines.map(l => l.replace(remove, '')).join('\n')
}

function isWhitespace(l) {
  return /^\s*$/.test(l)
}
