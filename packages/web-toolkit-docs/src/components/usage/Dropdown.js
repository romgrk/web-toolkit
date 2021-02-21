import React from 'react'
import jss from 'react-jss'
import { Box, Dropdown, Frame, Label } from 'web-toolkit'
import generateUsers from '../../helpers/generateUsers'
import CodeExample from '../CodeExample'

const styles = {
  dropdown: {
    minWidth: '220px !important',
  },
  frame: {
    padding: '1rem',
  },
}

const users = generateUsers(5)
const options = users.map(u => ({
  value: u.name,
  label: u.name,
}))

function DropdownUsage({ classes }) {
  return (
    <Box vertical>
      <p>
        Dropdown is a wrapper around <code>Input</code> and <code>Popover</code>{' '}
        that implement an autocompleting text field.
      </p>
      <h4>Button Dropdown</h4>
      <CodeExample
        text={`
          const options = [
            {
              value: '${users[0].name}',
              label: '${users[0].name}',
            },
            // ...
          ]

          <Dropdown
            size='large'
            placeholder='Search user...'
            icon='avatar-default'
            options={options}
          />
        `}
      />
      <Frame className={classes.frame}>
        <Box horizontal justify='center'>
          <Dropdown
            className={classes.dropdown}
            size='large'
            placeholder='Select User'
            icon='avatar-default'
            options={options}
          />
        </Box>
      </Frame>

      <h4>Input Dropdown</h4>
      <CodeExample
        text={`
          <Dropdown
            input
            size='large'
            placeholder='Search user...'
            icon='avatar-default'
            options={options}
          />
        `}
      />
      <Frame className={classes.frame}>
        <Box horizontal justify='center'>
          <Dropdown
            input
            className={classes.dropdown}
            size='large'
            placeholder='Select User'
            icon='avatar-default'
            options={options}
          />
        </Box>
      </Frame>
    </Box>
  )
}

export default jss(styles)(DropdownUsage)
