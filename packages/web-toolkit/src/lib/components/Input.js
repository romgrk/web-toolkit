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

const propTypes = {
  /** The HTML input type */
  type: prop.string,
  value: prop.string,
  defaultValue: prop.string,
  className: prop.string,
  /** Size of the input */
  size: prop.oneOf(['mini', 'small', 'medium', 'large', 'huge']),
  /** Shows a loading indicator */
  loading: prop.bool,
  /** Icon name or node (left) */
  icon: prop.node,
  /** Icon name or node (right) */
  iconAfter: prop.node,
  placeholder: prop.string,
  /** Disabled input */
  disabled: prop.bool,
  /** Flat style input */
  flat: prop.bool,
  /** Error style input */
  error: prop.bool,
  /** Warning style input */
  warning: prop.bool,
  /** Show a progress bar of `progress` percent size if it's a number,
   * or an undeterminate (loading) bar if `true` */
  progress: prop.oneOfType([prop.bool, prop.number]),
  /** Show a button to clear the input value */
  allowClear: prop.bool,
  /** Called when the input value changes, with the new value */
  onChange: prop.func,
  /** Called when Enter is pressed (prevents default behavior) */
  onAccept: prop.func,
  /** Called when the `iconAfter` is clicked */
  onClickIconAfter: prop.func,
}

const defaultProps = {
  type: 'text',
  size: 'medium',
  onChange: noop,
}

function Input({
  type,
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
  onAccept,
  onKeyDown,
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

  const onInputKeyDown = ev => {
    if (ev.code === 'Enter' && onAccept) {
      onAccept(ev.target.value)
      ev.preventDefault()
      return
    }
    if (onKeyDown) {
      onKeyDown(ev)
    }
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
          onKeyDown={onAccept ? onInputKeyDown : onKeyDown}
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
ExportedInput.propTypes = propTypes
ExportedInput.defaultProps = defaultProps

export default ExportedInput
