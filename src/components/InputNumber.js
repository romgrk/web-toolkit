/*
 * InputNumber.js
 */

import { useState } from 'react'
import prop from 'prop-types'
import cx from 'clsx'
import Icon from './Icon'

const noop = () => {}

function InputNumber({
  className,
  vertical,
  disabled,
  value: valueProp,
  onChange,
  ...rest
}) {
  const [valueState, setValueState] = useState(rest.defaultValue ?? '')
  const value = valueProp ?? valueState
  const step = rest.step ?? 1
  const min = rest.min ?? -Infinity
  const max = rest.max ?? +Infinity
  const setValue = valueProp !== undefined ? onChange : setValueState

  const onInputChange = ev => {
    setValue(Number(ev.target.value), ev)
  }

  const onUp   = () => setValue(value + step)
  const onDown = () => setValue(value - step)

  const downDisabled = disabled || (value - step < min)
  const upDisabled   = disabled || (value + step > max)

  const buttonClassNames = vertical ?
    'Button image-button' : undefined

  return (
    <div className={cx('InputNumber', className, { disabled, vertical })}>
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
  onChange: noop,
}

export default InputNumber
