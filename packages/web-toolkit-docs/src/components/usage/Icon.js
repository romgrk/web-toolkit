import React, { useState } from 'react'
import jss from 'react-jss'
import { sortBy } from 'rambda'
import * as fzy from 'fzy.js'
import { Box, Label, Input, Icon } from 'web-toolkit'
import CodeExample from '../CodeExample'

const styles = {
  grid: {
    padding: '1em 0.5em',
    minHeight: 1000, // Avoids scroll jank when filtering reduces grid size
  },
}
const addStyles = jss(styles)

export default function IconUsage() {
  return (
    <div>
      <CodeExample text={`
        const icon = <Icon name='system-search' />
      `}/>
      <p>
        Set the <code>name</code> property of the icon to any of the
        values in the list below.
      </p>


      <h5>Icons by name</h5>
      <IconGrid />
    </div>
  )
}

const IconGrid = addStyles(IconGridComponent)
function IconGridComponent({ classes }) {
  const [searchValue, setSearch] = useState('')
  const search = searchValue.trim()

  const iconNames = Object.keys(Icon.byName)
  const filteredNames =
    search ?
      sortBy(
        n => -fzy.score(search, n),
        iconNames.filter(n => fzy.hasMatch(search, n))
      ) :
      iconNames

  return (
    <Box vertical>
      <div>
        <Input
          allowClear
          icon='system-search'
          placeholder='Search icons'
          value={search}
          onChange={setSearch}
        />
      </div>
      <div className={classes.grid}>
        {filteredNames.map(name => 
          <Box horizontal inline style={{ width: 250, marginBottom: '1rem' }}>
            {React.createElement(
              Icon.byName[name],
              {
                colored: true,
                style: { width: '16px', transform: 'scale(1.5)'}
              }
            )}
            <Label muted>
              {name}
            </Label>
          </Box>
        )}
      </div>
    </Box>
  )
}
