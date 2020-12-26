/*
 * Input.js
 */


import { forwardRef } from 'react'
import cx from 'classname'
import Icon from './Icon'

function Input({
  type = 'text',
  icon,
  iconAfter,
  placeholder,
  flat,
  disabled,
  error,
  warning,
  progress,
  ...rest
}, ref) {
  return (
    <div className={cx('Input', { flat, disabled, error, warning, progress: progress !== undefined })} ref={ref}>
      {icon &&
        <span  className='Input__left'>
          {
            typeof icon === 'string' ? 
              <Icon name={icon} /> :
              icon
          }
        </span>
      }
      <input type={type} placeholder={placeholder} disabled={disabled} {...rest} />
      {progress &&
        <div className={cx('Input__progress', progress === true ? 'undeterminate' : undefined)}>
          <span
            className='Input__progress__bar'
            style={typeof progress === 'number' ? { width: progress + '%' } : undefined}
          />
        </div>
      }
      {iconAfter &&
        <span  className='Input__right'>
          {
            typeof iconAfter === 'string' ? 
              <Icon name={iconAfter} /> :
              iconAfter
          }
        </span>
      }
    </div>
  )
}

function Group({ children, className }, ref) {
  return (
    <div className={cx('InputGroup linked', className)} ref={ref}>
      {children}
    </div>
  )
}

const ExportedInput = forwardRef(Input)
ExportedInput.Group = forwardRef(Group)

export default ExportedInput
