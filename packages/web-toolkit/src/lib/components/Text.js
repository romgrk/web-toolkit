/*
 * Text.js
 */

import React from 'react'
import prop from 'prop-types'
import cx from 'clsx'

const propTypes = {
  as: prop.string,
  size: prop.oneOf(['mini', 'small', 'medium', 'large', 'huge']),
  weight: prop.oneOf([100, 300, 400, 700, 900]),
}

const defaultProps = {
  as: 'p',
}

function Text({
  children,
  className,
  size,
  align,
  weight,
  fill,
  hero,
  muted,
  info,
  success,
  warning,
  danger,
  italic,
  bold,
  noSelect,
  as,
  ...rest
}) {
  return (
    React.createElement(
      as,
      {
        className:
          cx(
            'Text',
            size,
            align ? `align-${align}` : undefined,
            fill === undefined ? undefined : fill === true ? 'fill' : `fill-${fill}`,
            weight ? `weight-${weight}` : undefined,
            {
              hero,
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

Text.propTypes = propTypes
Text.defaultProps = defaultProps

export default Text
