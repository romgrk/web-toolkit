/*
 * Box.js
 */

import cx from 'classname'

function Box({
  children,
  className,
  inline,
  compact,
  horizontal,
  vertical,
  align,
  space,
  ...rest
}) {
  return (
    <div
      className={cx(
        'Box',
        className,
        space ? `space-${space}` : undefined,
        { inline, compact, vertical, horizontal, align }
      )}
      {...rest}
    >
      {children}
    </div>
  )
}

export default Box
