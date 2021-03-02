/*
 * Alert.js
 */


import React from 'react'
import cx from 'clsx'
import prop from 'prop-types'

import Icon from './Icon'
import Box from './Box'
import Button from './Button'

function Alert({
  title,
  children,
  className,
  size,
  icon: iconProp,
  showClose,
  onClose,
  info,
  success,
  warning,
  danger,
  ...rest
}) {

  const icon = iconProp ??
    info ? 'dialog-information' :
    success ? 'emblem-ok' :
    warning ? 'dialog-warning' :
    danger ? 'dialog-warning' :
            'dialog-information'
  const showIcon = Boolean(icon)

  const alertClassName = cx('Alert', className, size, {
    info, success, warning, danger,
  })

  return (
    <Box horizontal className={alertClassName} {...rest}>
      {showIcon &&
        <Box className='Alert__icon'>
          {typeof icon === 'string' ? <Icon name={icon} /> : icon}
        </Box>
      }
      <Box.Fill className='Alert__content'>
        {title &&
          <div className='Alert__title'>
            {title}
          </div>
        }
        <div className='Alert__message'>
          {children}
        </div>
      </Box.Fill>
      {showClose &&
        <Button
          className='Alert__close'
          icon='window-close'
          onClick={onClose}
        />
      }
    </Box>
  )
}

Alert.propTypes = {
  title: prop.string,
  className: prop.string,
  size: prop.oneOf(['mini', 'small', 'medium', 'large', 'huge', 'mega']),
  icon: prop.string,
  showClose: prop.bool,
  onClose: prop.func,
  info: prop.bool,
  success: prop.bool,
  warning: prop.bool,
  danger: prop.bool,
}

Alert.defaultProps = {
  showClose: false,
  onClose: () => {},
}

export default Alert
