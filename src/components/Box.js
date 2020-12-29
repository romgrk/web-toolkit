/*
 * Box.js
 */

import cx from 'classname'

function Box({
  children,
  className,
  inline,
  compact,
  fill,
  horizontal,
  vertical,
  align,
  justify,
  space,
  ...rest
}) {
  return (
    <div
      className={cx(
        'Box',
        className,
        space ? `space-${space}` : undefined,
        typeof fill === 'string' ? `fill-${fill}` : fill ? 'fill' : undefined,
        { inline, compact, vertical, horizontal, align, justify }
      )}
      {...rest}
    >
      {children}
    </div>
  )
}

export default Box
