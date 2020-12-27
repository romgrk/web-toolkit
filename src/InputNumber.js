/*
 * InputNumber.js
 */

import cx from 'classname'
import Icon from './Icon'

function InputNumber({
  className,
  vertical,
  disabled,
  ...rest
}) {
  if (vertical)
    return (
      <div className={cx('InputNumber', className, { disabled, vertical })}>
        <button className='Button InputNumber__button up' disabled={disabled} tabIndex='-1'>
          <Icon name='list-add' />
        </button>
        <input type='number' disabled={disabled} {...rest} />
        <button className='Button InputNumber__button down' disabled={disabled} tabIndex='-1'>
          <Icon name='list-remove' />
        </button>
      </div>
    )

  return (
    <div className={cx('InputNumber', className, { disabled, vertical })}>
      <input type='number' disabled={disabled} {...rest} />
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
