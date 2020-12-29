/*
 * Notebook.js
 */

import cx from 'classname'

function Notebook({
  children,
  className,
  ...rest
}) {
  return (
    <div className={cx('Notebook', className)} {...rest}>
    </div>
  )
}

export default Notebook
