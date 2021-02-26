/*
 * Frame.js
 */

import React from 'react'
import cx from 'clsx'
import prop from 'prop-types'

const propTypes = {
  className: prop.string,
  /** The label of the frame (using <fieldset>/<legend>) */
  label: prop.node,
  /** The background color */
  background: prop.oneOf(['low', 'default', 'medium', 'high']),
  /** If true, is displayed as an inline element */
  inline: prop.bool,
  /** If true, is scrollable */
  scrollable: prop.bool,
  /** If true, shows a border */
  border: prop.bool,
}

const defaultProps = {
  border: true,
}

function Frame({
  children,
  className,
  inline,
  background,
  scrollable,
  border,
  label,
  padded,
  ...rest
}) {
  const Component = label ? 'fieldset' : 'div'
  return (
    <Component
      className={cx(
        'Frame',
        className,
        background ? `background-${background}` : undefined,
        {
          inline,
          padded,
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

Frame.propTypes = propTypes
Frame.defaultProps = defaultProps

export default Frame
