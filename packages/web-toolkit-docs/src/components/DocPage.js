import React from 'react'
import jss from 'react-jss'
import { Box } from 'web-toolkit'
import * as WT from 'web-toolkit'

import USAGE from './usage'
import Content from './Content'
import DocTable from './DocTable'
import ErrorBoundary from './ErrorBoundary'

const styles = {
  title: {
    marginTop: '2rem',
    marginBottom: '1rem',
    display: 'flex',
    flexDirection: 'column',
    // alignItems: 'center',
    '& h1': {
      display: 'inline-block',
      margin: 0,
    },
    '& a': {
      alignSelf: 'flex-start',
      marginLeft: '1.5rem',
      fontSize: 12,
    },
  },

  usage: {
    minHeight: 500,
    paddingBottom: '5rem',
  },
}

const sourceBase =
  'https://github.com/romgrk/web-toolkit/blob/master/packages/web-toolkit/'

function DocPage({ classes, data }) {
  const Usage = USAGE[data.name]
  const Component = WT[data.name]

  return (
    <Content>
      <div className={classes.title}>
        <h1>
          {`<${data.name} />`}
        </h1>
        <a href={`${sourceBase}${data.sourcePath}`} className='link'>
          Open source
        </a>
      </div>

      <Box vertical>
        <h4>Props</h4>
        <DocTable
          data={data.exports.default}
        />

        <h4>Usage</h4>
        <div className={classes.usage}>
          {Usage ?
            <Usage /> :
            <div>
              <ErrorBoundary>
                <Component />
              </ErrorBoundary>
            </div>
          }
        </div>
      </Box>

    </Content>
  )
}
export default jss(styles)(DocPage)
