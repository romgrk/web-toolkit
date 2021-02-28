/*
 * Alert.js
 */


import React from 'react'
import cx from 'clsx'
import prop from 'prop-types'

import Icon from './Icon'
import Box from './Box'

function Alert({
  title,
  children,
  className,
  size,
  icon: iconProp,
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

  return (
    <Box horizontal className={cx('Alert', className, size)} {...rest}>
      {showIcon &&
        <div className='Alert__icon'>
          {typeof icon === 'string' ? <Icon name={icon} /> : icon}
        </div>
      }
      <div className='Alert__content'>
        {title &&
          <div className='Alert__title'>
            {title}
          </div>
        }
        <div className='Alert__message'>
          {children}
        </div>
      </div>
    </Box>
  )
}

Alert.propTypes = {
  title: prop.string,
  className: prop.string,
  size: prop.oneOf(['mini', 'small', 'medium', 'large', 'huge']),
  info: prop.bool,
  success: prop.bool,
  warning: prop.bool,
  danger: prop.bool,
}

export default Alert
