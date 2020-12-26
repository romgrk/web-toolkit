/*
 * Button.js
 */

import cx from 'classname'
import Icon from './Icon'

function Button({ children, icon, className, disabled, circular, flat, active, text, image }) {
  return (
    <button
      className={cx('Button', className, {
        disabled,
        circular,
        flat,
        active,
        'text-button': text,
        'image-button': image,
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
