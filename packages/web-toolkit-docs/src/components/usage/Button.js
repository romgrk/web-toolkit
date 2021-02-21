import React, { useState } from 'react'
import jss from 'react-jss'
import { Box, Button, Label, Input } from 'web-toolkit'
import CodeExample from '../CodeExample'

const styles = {
  grid: {
    padding: '1em 0.5em',
    minHeight: 1000, // Avoids scroll jank when filtering reduces grid size
  },
}
const addStyles = jss(styles)

function ButtonUsage() {
  return (
    <div>
      <p>
        Buttons are things that you click on. To do stuff.
      </p>

      <h4>Size</h4>
      <Box horizontal align>
        <Button size='huge'>Click me</Button>
        <Button size='large'>Click me</Button>
        <Button size='medium'>Click me</Button>
        <Button size='small'>Click me</Button>
        <Button size='mini'>Click me</Button>
      </Box>
      <CodeExample text={`
        const Example = () =>
          <>
            <Button size='huge'>Click me</Button>
            <Button size='large'>Click me</Button>
            <Button size='medium'>Click me</Button>
            <Button size='small'>Click me</Button>
            <Button size='mini'>Click me</Button>
          </>
      `}/>

      <h4>Types</h4>
      <Box vertical>
        <Box horizontal align>
          <Button>Default</Button>
          <Button circular icon='document-edit' />
          <Button primary>Primary</Button>
          <Button danger>Danger</Button>
          <Button flat>Flat</Button>
          <Button link>Link</Button>
        </Box>
        <Box horizontal align>
          <Button disabled>Default</Button>
          <Button disabled circular icon='document-edit' />
          <Button disabled primary>Primary</Button>
          <Button disabled danger>Danger</Button>
          <Button disabled flat>Flat</Button>
          <Button disabled link>Link</Button>
        </Box>
      </Box>
      <CodeExample text={`
        const Example = () =>
          <>
            <Button>Default</Button>
            <Button circular icon='document-edit' />
            <Button primary>Primary</Button>
            <Button danger>Danger</Button>
            <Button flat>Flat</Button>
            <Button link>Link</Button>
          </>
      `}/>
    </div>
  )
}

export default addStyles(ButtonUsage)
