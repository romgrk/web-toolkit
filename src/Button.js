/*
 * Button.js
 */

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
  text,
  image,
  primary,
  danger,
}) {
  return (
    <button
      className={cx('Button', className, {
        disabled,
        circular,
        flat,
        link,
        active,
        'text-button': text,
        'image-button': image,
        'suggested-action': primary,
        'destructive-action': danger,
      })}
      disabled={disabled}
    >
      {icon &&
        (typeof icon === 'string' ?
          <Icon name={icon} /> : icon)
      }
      {children}
    </button>
  )
}

export default Button
