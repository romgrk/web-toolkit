import React from 'react'
import jss from 'react-jss'
import cx from 'clsx'

const styles = {
  root: {
    width: '100%',
    height: '100%',
    overflow: 'auto'
  },
}

function Main({ classes, className, ...props }) {
  return (
    <div
      className={cx(className, classes.root)}
      {...props}
    />
  )
}

export default jss(styles)(Main)
