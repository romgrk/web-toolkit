/*
 * Button.js
 */

import React, { forwardRef } from 'react'
import prop from 'prop-types'
import cx from 'clsx'

import Icon from './Icon'
import Spinner from './Spinner'

const propTypes = {
  className: prop.string,
  size: prop.oneOf(['mini', 'small', 'medium', 'large', 'huge', 'mega']),
  /** An icon name */
  icon: prop.string,
  /** HTML button type */
  type: prop.string,
  /** Shows a spinner and disables the button */
  loading: prop.bool,
  /** Round style button */
  circular: prop.bool,
  /** Flat style button */
  flat: prop.bool,
  /** Link style button */
  link: prop.bool,
  /** Primary style button */
  primary: prop.bool,
  /** Danger style button */
  danger: prop.bool,
  /** Active state */
  active: prop.bool,
  /** Hover state */
  hover: prop.bool,
  /** Button containing text */
  text: prop.bool,
  /** Button containing an image only */
  image: prop.bool,
}

const defaultProps = {
  size: 'medium',
  type: 'button',
}

function Button({
  children,
  className,
  size,
  icon,
  type,
  disabled,
  loading,
  circular,
  flat,
  link,
  active,
  hover,
  text,
  image,
  primary,
  danger,
  ...rest
}, ref) {
  const isImageButton = image !== undefined ? image : Boolean(!children)
  return (
    <button
      className={cx('Button', size, {
        disabled,
        circular,
        flat,
        link,
        active,
        hover,
        'text-button': text,
        'image-button': isImageButton,
        'suggested-action': primary,
        'destructive-action': danger,
      }) + ' ' + cx(className)}
      disabled={disabled || loading}
      type={type}
      ref={ref}
      {...rest}
    >
      {loading &&
        <Spinner />
      }
      {icon &&
        (typeof icon === 'string' ?
          <Icon name={icon} colored className='Button__icon' /> : icon)
      }
      {children}
    </button>
  )
}

const Export = forwardRef(Button)
Export.propTypes = propTypes
Export.defaultProps = defaultProps

export default Export
