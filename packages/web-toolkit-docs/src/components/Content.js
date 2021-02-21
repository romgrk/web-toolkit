import React from 'react'
import jss from 'react-jss'
import cx from 'clsx'

const styles = {
  root: {
    padding: '2rem',
  },
}

function Content({ classes, className, ...props }) {
  return (
    <div
      className={cx(className, classes.root)}
      {...props}
    />
  )
}

export default jss(styles)(Content)
