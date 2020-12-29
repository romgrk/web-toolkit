/*
 * Button.js
 */

import { forwardRef } from 'react'
import cx from 'classname'

import Icon from './Icon'
import Spinner from './Spinner'

function Button({
  children,
  icon,
  className,
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
      className={cx('Button', {
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
      ref={ref}
      {...rest}
    >
      {loading &&
        <Spinner />
      }
      {icon &&
        (typeof icon === 'string' ?
          <Icon name={icon} colored /> : icon)
      }
      {children}
    </button>
  )
}

export default forwardRef(Button)
