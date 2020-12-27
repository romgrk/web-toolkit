/*
 * Label.js
 */

import cx from 'classname'

function Label({ children, className, align, fill, ellipsis }) {
  return (
    <span
      className={
        cx(
          'Label',
          align ? `align-${align}` : undefined,
          fill === undefined ? undefined : fill === true ? 'fill' : `fill-${fill}`,
          { ellipsis }
        ) + ' ' + cx(className)
      }
    >
      {children}
    </span>
  )
}

export default Label
