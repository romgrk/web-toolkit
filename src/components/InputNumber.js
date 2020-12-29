/*
 * InputNumber.js
 */

import cx from 'classname'
import Icon from './Icon'

function InputNumber({
  className,
  vertical,
  disabled,
  onChange,
  ...rest
}) {
  const onInputChange = ev => {
    onChange && onChange(Number(ev.target.value), ev)
  }

  if (vertical)
    return (
      <div className={cx('InputNumber', className, { disabled, vertical })}>
        <button className='Button InputNumber__button up' disabled={disabled} tabIndex='-1'>
          <Icon name='list-add' />
        </button>
        <div className='Input__area'>
          <input type='number' disabled={disabled} onChange={onInputChange} {...rest} />
        </div>
        <button className='Button InputNumber__button down' disabled={disabled} tabIndex='-1'>
          <Icon name='list-remove' />
        </button>
      </div>
    )

  return (
    <div className={cx('InputNumber', className, { disabled, vertical })}>
      <div className='Input__area'>
        <input type='number' disabled={disabled} onChange={onInputChange} {...rest} />
      </div>
      <button className='InputNumber__button down' disabled={disabled} tabIndex='-1'>
        <Icon name='list-remove' />
      </button>
      <button className='InputNumber__button up' disabled={disabled} tabIndex='-1'>
        <Icon name='list-add' />
      </button>
    </div>
  )
}

export default InputNumber
