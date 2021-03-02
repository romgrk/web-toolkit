/*
 * InputNumber.js
 */

import React, { useState } from 'react'
import prop from 'prop-types'
import cx from 'clsx'
import Icon from './Icon'

const noop = () => {}

function InputNumber({
  className,
  size,
  vertical,
  disabled,
  value: valueProp,
  defaultValue,
  onChange,
  ...rest
}) {
  const [valueState, setValueState] = useState(defaultValue ?? '')
  const value = valueProp ?? valueState
  const step = rest.step ?? 1
  const min = rest.min ?? -Infinity
  const max = rest.max ?? +Infinity
  const setValue = valueProp !== undefined ? onChange : setValueState

  const onInputChange = ev => {
    setValue(Number(ev.target.value), ev)
  }

  const onUp   = () => setValue(Number(value) + step)
  const onDown = () => setValue(Number(value) - step)

  const downDisabled = disabled || (value - step < min)
  const upDisabled   = disabled || (value + step > max)

  const buttonClassNames = vertical ?
    'Button image-button' : undefined

  return (
    <div className={cx('InputNumber', className, size, { disabled, vertical })}>
      <div className='Input__area'>
        <input
          type='number'
          disabled={disabled}
          value={value}
          onChange={onInputChange}
          {...rest}
        />
      </div>
      <button
        tabIndex='-1'
        className={cx('InputNumber__button down', buttonClassNames)}
        disabled={downDisabled}
        onClick={onDown}
      >
        <Icon name='list-remove' />
      </button>
      <button
        tabIndex='-1'
        className={cx('InputNumber__button up', buttonClassNames)}
        disabled={upDisabled}
        onClick={onUp}
      >
        <Icon name='list-add' />
      </button>
    </div>
  )
}

InputNumber.propTypes = {
  className: prop.string,
  size: prop.oneOf(['mini', 'small', 'medium', 'large', 'huge', 'mega']),
  vertical: prop.bool,
  disabled: prop.bool,
  value: prop.number,
  defaultValue: prop.number,
  step: prop.number,
  min: prop.number,
  max: prop.number,
  onChange: prop.func,
}

InputNumber.defaultProps = {
  size: 'medium',
  onChange: noop,
}

export default InputNumber
