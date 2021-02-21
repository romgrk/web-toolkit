import React from 'react'
import jss from 'react-jss'
import { Link } from 'react-router-dom'
import { Autocomplete, Box, Frame, Label } from 'web-toolkit'
import generateUsers from '../../helpers/generateUsers'
import CodeExample from '../CodeExample'

const styles = {
  frame: {
    padding: '1rem',
  },
}

const users = generateUsers(20)
const options = users.map(u => ({
  value: u.name,
  label: <span>{u.name} <Label muted>{u.username}</Label></span>
}))

function AutocompleteUsage({ classes }) {
  return (
    <Box vertical>
      <p>
        Autocomplete is a wrapper around <code>Input</code> and <code>Popover</code>{' '}
        that implement an autocompleting text field.
        Also see <Link to={process.env.PUBLIC_URL + '/component/dropdown'}>Dropdown</Link> for
        a filterable dropdown input (aka combobox).
      </p>
      <CodeExample
        text={`
          const options = [
            {
              value: '${users[0].name}',
              label:
                <span>
                  ${users[0].name} <Label muted>${users[0].username}</Label>
                </span>
            },
            // ...
          ]

          <Autocomplete
            size='large'
            placeholder='Search user...'
            icon='avatar-default'
            options={options}
          />
        `}
      />
      <Frame className={classes.frame}>
        <Autocomplete
          size='large'
          placeholder='Search user...'
          icon='avatar-default'
          options={options}
        />
      </Frame>
    </Box>
  )
}

export default jss(styles)(AutocompleteUsage)
