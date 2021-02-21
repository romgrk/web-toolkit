import React from 'react'
import { Box } from 'web-toolkit'
import * as WT from 'web-toolkit'

import Content from './Content'
import DocTable from './DocTable'

export default function DocPage({ data }) {
  const Component = WT[data.name]

  return (
    <Content>
      <h1>{data.name}</h1>

      <Box vertical>
        <h4>Component</h4>
        <div>
          <Component />
        </div>

        {/*<pre>{JSON.stringify(data.exports.default, null, 2)}</pre>*/}

        <h4>Proptypes</h4>
        <DocTable
          data={data.exports.default}
        />
      </Box>

    </Content>
  )
}