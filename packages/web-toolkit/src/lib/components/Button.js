/*
 * Button.js
 */

import React, { forwardRef } from 'react'
import prop from 'prop-types'
import cx from 'clsx'

import Icon from './Icon'
import Spinner from './Spinner'

function Button({
  children,
  icon,
  className,
  type,
  size,
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

Export.propTypes = {
  className: prop.string,
  size: prop.oneOf(['mini', 'small', 'medium', 'large', 'huge']),
}

Export.defaultProps = {
  size: 'medium',
  type: 'button',
}

export default Export
