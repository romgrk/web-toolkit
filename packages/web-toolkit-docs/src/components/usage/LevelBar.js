import React, { useState } from 'react'
import jss from 'react-jss'
import { Box, Expander, Frame, Icon, Input, LevelBar, Label } from 'web-toolkit'
import CodeExample from '../CodeExample'

const styles = {
  grid: {
    padding: '1em 0.5em',
    minHeight: 1000, // Avoids scroll jank when filtering reduces grid size
  },
  hidden: {
    position: 'absolute',
    top: -9999,
    left: -9999,
  },
  field: {
    width: 200,
  },
  bar: {
    width: 300,
  },
  help: {
    display: 'inline-block',
    width: 'calc(500px + 1rem)',
    marginTop: 0,
    opacity: 0.6,
    fontSize: 14,
    border: '1px solid #888',
    borderLeft: '4px solid #aaa',
    borderRadius: 4,
    padding: '0.5em',
  },
  helpIcon: {
    marginRight: '0.5em !important',
    paddingTop: '2px',
  },
}
const addStyles = jss(styles)

function LevelBarUsage({ classes }) {
  const [password, setPassword] = useState('')

  return (
    <div>
      <p>
        Level bars show how happy you are with the user's compliance to 
        your simple, so simple, directives.
      </p>

      <Frame>
        <Box vertical padded>
          <Box horizontal align>
            {/* Fake password input to disable auto-fill */}
            <input
              id='password'
              type='password'
              autoComplete='password'
              placeholder='Fake password field'
              tabIndex='-1'
              className={classes.hidden}
            />
            <Input
              id='certainlyNotAPassword'
              type='password'
              size='large'
              placeholder='Password'
              icon='dialog-password'
              className={classes.field}
              value={password}
              onChange={setPassword}
            />
            <LevelBar
              className={classes.bar}
              value={getPasswordLevel(password)}
            />
          </Box>
          <Box className={classes.help} horizontal compact>
            <div className={classes.helpIcon}>
              <Icon name='dialog-information' />
            </div>
            <div className={classes.helpText}>
              Your password be at least <b>6 characters long</b> and should contain
              at least one <b>uppercase letter</b>, one <b>number</b> and
              one <b>special character</b>.
            </div>
          </Box>
        </Box>
      </Frame>

      <CodeExample text={`
        const password = 'secret' 
        const Example = () =>
          <>
            <LevelBar
              value={getPasswordLevel(password)}
            />
          </>
      `}/>

      <Expander
        iconPosition='before'
        label={<span>Show <code>getPasswordLevel</code> example</span>}
      >
        <CodeExample text={`
          function getPasswordLevel(password) {
            if (password === '')
              return -1
            let value = 0
            if (password.length >= 6)
              value++
            if (/[a-z]/.test(password) && /[A-Z]/.test(password))
              value++
            if (/\d/.test(password))
              value++
            if (/\W/.test(password))
              value++
            if (value > 2 && password.length < 6)
              value = 2
            return value
          }
        `}/>
      </Expander>

    </div>
  )
}

export default addStyles(LevelBarUsage)

function getPasswordLevel(password) {
  if (password === '')
    return -1
  let value = 0
  if (password.length >= 6)
    value++
  if (/[a-z]/.test(password) && /[A-Z]/.test(password))
    value++
  if (/\d/.test(password))
    value++
  if (/\W/.test(password))
    value++
  if (value > 2 && password.length < 6)
    value = 2
  return value
}
