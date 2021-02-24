import React from 'react'
import jss from 'react-jss'
import { Link } from 'react-router-dom'
import { Box, Icon, Text } from 'web-toolkit'

import Content from './Content'

const styles = {
  root: {},
  title: {
    fontWeight: 400,
    fontSize: '3rem',
  },
  card: {
    minWidth: 200,
  }
}

function Home({ classes }) {
  return (
    <Content className={classes.root}>
      <h1 className={classes.title}>
        web-toolkit
      </h1>
      <Text hero>
        Web-Toolkit is a react UI framework base on the GTK's adwaita theme.
        It provides high-quality components that are meant to facilitate the
        implementation of desktop web apps.
      </Text>
      <br/>
      <br/>
      <Box horizontal>
        <Icon name='dialog-information' />
        <Text size='large' weight={300}>
          This documentation guide is a work-in-progress. If you
          need assistance and your questions are not answered here, please{' '}
          <a href='https://github.com/romgrk/web-toolkit/issues' className='link'>open an issue</a>.
        </Text>
      </Box>
      <br/>
      <br/>
      <Text size='large' as='div'>
        <div>Here are some of the components grouped by category.</div>

        <Box horizontal>
          <Box className={classes.card}>
            <h3>Layout</h3>
            <ul>
              <li><Link to='/component/box' className='link'>Box</Link></li>
              <li><Link to='/component/paned' className='link'>Paned</Link></li>
              <li><Link to='/component/frame' className='link'>Frame</Link></li>
            </ul>
          </Box>
          <Box className={classes.card}>
            <h3>Input</h3>
            <ul>
              <li><Link to='/component/button' className='link'>Button</Link></li>
              <li><Link to='/component/input' className='link'>Input</Link></li>
              <li><Link to='/component/dropdown' className='link'>Dropdown</Link></li>
              <li><Link to='/component/datepicker' className='link'>DatePicker</Link></li>
            </ul>
          </Box>
          <Box className={classes.card}>
            <h3>Display</h3>
            <ul>
              <li><Link to='/component/icon' className='link'>Icon</Link></li>
              <li><Link to='/component/label' className='link'>Label</Link></li>
              <li><Link to='/component/text' className='link'>Text</Link></li>
            </ul>
          </Box>
        </Box>
      </Text>
    </Content>
  )
}

export default jss(styles)(Home)
