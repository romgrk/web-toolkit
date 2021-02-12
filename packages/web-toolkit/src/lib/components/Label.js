/*
 * Label.js
 */

import React from 'react'
import cx from 'clsx'

function Label({
  children,
  className,
  align,
  fill,
  ellipsis,
  title,
  disabled,
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
            disabled,
            info,
            success,
            warning,
            danger,
            'text-muted': muted,
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
