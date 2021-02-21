import React from 'react'
import Highlight from 'react-highlight'
import jss from 'react-jss'

import indent  from '../helpers/indent'
import '../styles/highlight.css'

const styles = {
  root: {
    '& pre': {
      padding: '1em',
    },
    '& code': {
      border: 'none',
      padding: 0,
    }
  },
}

function CodeExample({ classes, text, children }) {
  return (
    <div className={classes.root}>
      <Highlight
        className='javascript'
        children={indent(text || children)}
      />
    </div>
  )
}
export default jss(styles)(CodeExample)
