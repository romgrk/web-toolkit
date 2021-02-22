import React from 'react'
import jss from 'react-jss'
import { Label } from 'web-toolkit'

const styles = {
  root: {
    fontSize: 18,
    lineHeight: 1.5,
    '& a': {
      color: 'inherit',
      fontWeight: 'bold',
    }
  }
}

class ErrorBoundary extends React.Component {
  state = {
    error: undefined,
  }

  static getDerivedStateFromError(error) {
    return { error }
  }

  render() {
    const { classes } = this.props

    if (this.state.error) {
      return (
        <div className={classes.root}>
          <Label danger>
            This example page has not been created yet and there was an
            error while trying to auto-render this component :/<br/>

            Try looking for it in the{' '}
            <a href='https://romgrk.github.io/web-toolkit/demo/'>demo</a>,{' '}
            or <a href='https://github.com/romgrk/web-toolkit'>come help me</a> implement it :)
          </Label>
        </div>
      )
    }

    return this.props.children; 
  }
}

export default jss(styles)(ErrorBoundary)
