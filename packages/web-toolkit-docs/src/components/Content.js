import React from 'react'
import jss from 'react-jss'
import cx from 'clsx'
import GithubCorner from './GithubCorner'

const styles = {
  root: {
    position: 'relative',
    padding: '2rem',
  },
  link: {
    position: 'absolute',
    top:   0,
    right: 0,
  },
}

function Content({ classes, className, children, ...props }) {
  return (
    <div
      className={cx(className, classes.root)}
      {...props}
    >
      <GithubCorner
        url='https://github.com/romgrk/web-toolkit'
        className={classes.link}
      />
      {children}
    </div>
  )
}

export default jss(styles)(Content)
