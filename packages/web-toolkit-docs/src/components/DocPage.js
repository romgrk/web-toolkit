import React from 'react'
import jss from 'react-jss'
import { Box } from 'web-toolkit'
import * as WT from 'web-toolkit'

import USAGE from './usage'
import Content from './Content'
import DocTable from './DocTable'

const styles = {
  usage: {
    minHeight: 500,
  }
}

function DocPage({ classes, data }) {
  const Usage = USAGE[data.name]
  const Component = WT[data.name]

  return (
    <Content>
      <h1>{`<${data.name} />`}</h1>

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
              <Component />
            </div>
          }
        </div>
      </Box>

    </Content>
  )
}
export default jss(styles)(DocPage)
