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
  italic,
  noSelect,
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
            'text-italic': italic,
            'user-select-none': noSelect,
          }
        ) + ' ' + cx(className)
      }
    >
      {children}
    </span>
  )
}

export default Label
