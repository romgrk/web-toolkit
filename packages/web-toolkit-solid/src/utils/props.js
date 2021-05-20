/*
 * pick.js
 */

/* Picks the passed props
 * @param {Set|Array} props
 * @param {Object} input
 */
export function pick(props, input) {
  const output = {}

  for (const prop of props) {
    if (prop in input)
      output[prop] = input[prop]
  }

  return output
}

/* Picks all but the passed props
 * @param {Set} props
 * @param {Object} input
 */
export function unpick(props, input) {
  const output = {}

  for (const prop of Object.keys(input)) {
    if (!props.has(prop))
      output[prop] = input[prop]
  }

  return output
}
