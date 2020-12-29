/*
 * Spinner.js
 */

import cx from 'classname'
import Icon from './Icon'

function Spinner({ hidden, disabled }) {
  return (
    <Icon className={cx('Spinner', { hidden, disabled })} name='process-working' />
  )
}

export default Spinner
