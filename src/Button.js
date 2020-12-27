/*
 * Button.js
 */

import { forwardRef } from 'react'
import cx from 'classname'
import Icon from './Icon'

function Button({
  children,
  icon,
  className,
  disabled,
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
        'image-button': image,
        'suggested-action': primary,
        'destructive-action': danger,
      }) + ' ' + className}
      disabled={disabled}
      ref={ref}
      {...rest}
    >
      {icon &&
        (typeof icon === 'string' ?
          <Icon name={icon} /> : icon)
      }
      {children}
    </button>
  )
}

export default forwardRef(Button)
