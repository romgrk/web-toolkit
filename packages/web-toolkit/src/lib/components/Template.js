/*
 * Notebook.js
 */

import React from 'react'
import cx from 'clsx'
import prop from 'prop-types'

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

Notebook.propTypes = {
  className: prop.string,
}

export default Notebook
