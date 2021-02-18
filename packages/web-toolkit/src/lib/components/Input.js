/*
 * Input.js
 */


import React, { useState, useRef, forwardRef } from 'react'
import prop from 'prop-types'
import cx from 'clsx'

import useControlled from '../utils/useControlled'
import Button from './Button'
import Icon from './Icon'
import Spinner from './Spinner'

const noop = () => {}

function useForceUpdate() {
  const [_, setValue] = useState(0)
  return () => setValue(value => ++value)
}

function Input({
  type = 'text',
  value: valueProp,
  defaultValue,
  className,
  size,
  loading,
  icon: iconValue,
  iconAfter,
  placeholder,
  flat,
  disabled: disabledValue,
  error,
  warning,
  progress,
  children,
  allowClear,
  onChange,
  onClickIconAfter,
  ...rest
}, ref) {

  const icon = iconValue || (loading ? <Spinner /> : undefined)
  const disabled = disabledValue || loading

  const forceUpdate = useForceUpdate()
  const inputRef = useRef()
  const isControlled = typeof rest.value === 'string'
  const [value, setValue] = useControlled(valueProp, defaultValue, onChange)

  const inputClassName =
    cx('Input', size, { flat, disabled, error, warning, progress: progress !== undefined })
    + ' ' + cx(className)

  const onInputChange = ev => {
    if (!isControlled)
      forceUpdate()
    setValue(ev.target.value, ev)
  }

  const onClickContainer = ev => {
    if (ev.target !== inputRef.current && inputRef.current)
      inputRef.current.focus()
  }

  if (allowClear) {
    if (value) {
      iconAfter = 'window-close'
      onClickIconAfter = () => setValue('')
    }
    else {
      iconAfter = undefined
    }
  }

  const iconAfterChildren =
    typeof iconAfter === 'string' ? 
      <Icon name={iconAfter} /> :
      iconAfter

  return (
    <div className={inputClassName} ref={ref} onClick={onClickContainer}>
      {icon &&
        <span  className='Input__left'>
          {
            typeof icon === 'string' ? 
              <Icon name={icon} /> :
              icon
          }
        </span>
      }
      <div className='Input__area'>
        <input
          type={type}
          placeholder={placeholder}
          disabled={disabled}
          className={value === '' ? 'empty' : undefined}
          ref={inputRef}
          value={value}
          onChange={onInputChange}
          {...rest}
        />
        {children &&
          <div className='Input__children'>
            {children}
          </div>
        }
      </div>
      {progress &&
        <div className={cx('Input__progress', progress === true ? 'indeterminate' : undefined)}>
          <span
            className='Input__progress__bar'
            style={typeof progress === 'number' ? { width: progress + '%' } : undefined}
          />
        </div>
      }
      {iconAfter &&
        (onClickIconAfter ?
          <Button
            className='Input__right'
            flat
            size={size}
            onClick={onClickIconAfter}
          >
            {iconAfterChildren}
          </Button>
          :
          <span className='Input__right'>
            {iconAfterChildren}
          </span>
        )
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

ExportedInput.propTypes = {
  size: prop.oneOf(['mini', 'small', 'medium', 'large', 'huge']),
  allowClear: prop.bool,
  onChange: prop.func,
}

ExportedInput.defaultProps = {
  size: 'medium',
  onChange: noop,
}

export default ExportedInput
