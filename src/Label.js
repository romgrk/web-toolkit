/*
 * Label.js
 */

import cx from 'classname'

function Label({
  children,
  className,
  align,
  fill,
  ellipsis,
  title,
  muted,
  info,
  success,
  warning,
  danger,
}) {
  return (
    <span
      className={
        cx(
          'Label',
          align ? `align-${align}` : undefined,
          fill === undefined ? undefined : fill === true ? 'fill' : `fill-${fill}`,
          {
            ellipsis,
            title,
            'text-muted': muted,
            'text-info': info,
            'text-success': success,
            'text-warning': warning,
            'text-danger': danger,
          }
        ) + ' ' + cx(className)
      }
    >
      {children}
    </span>
  )
}

export default Label
