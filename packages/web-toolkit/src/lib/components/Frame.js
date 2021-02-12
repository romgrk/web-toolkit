/*
 * Frame.js
 */

import React from 'react'
import cx from 'clsx'
import prop from 'prop-types'

function Frame({
  children,
  className,
  inline,
  light,
  dark,
  darker,
  scrollable,
  border,
  label,
  ...rest
}) {
  const Component = label ? 'fieldset' : 'div'
  return (
    <Component
      className={cx(
        'Frame',
        className,
        {
          inline,
          light,
          dark,
          darker,
          scrollable,
          'no-border': !border,
        }
      )}
      role={Component === 'fieldset' ? 'presentation' : undefined}
      {...rest}
    >
      {label &&
        <legend>{label}</legend>
      }
      {children}
    </Component>
  )
}

Frame.propTypes = {
  className: prop.string,
  label: prop.node,
  inline: prop.bool,
  light: prop.bool,
  dark: prop.bool,
  darker: prop.bool,
  scrollable: prop.bool,
  border: prop.bool,
}

Frame.defaultProps = {
  border: true,
}

export default Frame
