/*
 * Label.js
 */

import React from 'react'
import prop from 'prop-types'
import cx from 'clsx'

const propTypes = {
  size: prop.oneOf(['mini', 'small', 'medium', 'large', 'huge']),
}

function Label({
  children,
  className,
  size,
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
  bold,
  noSelect,
  ...rest
}) {
  const as = rest.htmlFor ? 'label' : 'span'
  return (
    React.createElement(
      as,
      {
        className:
          cx(
            'Label',
            size,
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
              'text-bold': bold,
              'user-select-none': noSelect,
            }
          ) + ' ' + cx(className),
        ...rest
      },
      children
    )
  )
}

Label.propTypes = propTypes

export default Label
