/*
 * Toolbar.js
 */

import cx from 'classname'

function Toolbar({ className, children, horizontal, vertical }) {
  return (
    <div className={cx('Toolbar', className, { horizontal, vertical })}>
      {children}
    </div>
  )
}

export default Toolbar
