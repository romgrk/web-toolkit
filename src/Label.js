/*
 * Label.js
 */

import cx from 'classname'

function Label({ children, className }) {
  return (
    <span className={cx('Label', className, {})}>
      {children}
    </span>
  )
}

export default Label
