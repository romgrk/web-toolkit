import React, { useState } from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'
import jss from 'react-jss'
import { sortBy } from 'rambda'
import * as fzy from 'fzy.js'
import {
  Box,
  Input,
  Label,
  List,
} from 'web-toolkit'
import routes from './routes'

const styles = {
  root: {
    width: '100%',
    height: '100%',
  },
  mark: {
    backgroundColor: '#ffd54f',
  },
  list: {
    flex: 1,
    overflow: 'auto',
  }
}

function Sidebar({ classes }) {
  const [searchValue, setSearch] = useState('')
  const search = searchValue.trim()
  const history = useHistory()
  const location = useLocation()

  const filteredRoutes =
    search ?
      sortBy(
        r => -fzy.score(search, r.label),
        routes.filter(r => fzy.hasMatch(search, r.label))
      ) :
      routes

  const onSubmit = ev => {
    ev.preventDefault()
    const selectedRoute = filteredRoutes[0]
    if (!selectedRoute)
      return
    history.push(selectedRoute.path)
    setTimeout(() => document.getElementById('main').focus(), 200)
    setSearch('')
  }

  return (
    <Box vertical compact className={classes.root}>
      <Box vertical padded className='background-dark'>
        <form onSubmit={onSubmit}>
          <Input
            allowClear
            icon='system-search'
            placeholder='Search documentation'
            value={search}
            onChange={setSearch}
          />
        </form>
      </Box>
      <List border={false} fill sidebar='navigation' className={classes.list}>
        {filteredRoutes.map(route =>
          <List.Item
            as={Link}
            to={route.path}
            key={route.label}
            className='align'
            activatable
            selected={route.path === location.pathname}
          >
            <Label>
              {search === '' ?
                route.label :
                highlight(
                  classes.mark,
                  route.label,
                  fzy.positions(search, route.label)
                )
              }
            </Label>
          </List.Item>
        )}
        {filteredRoutes.length === 0 &&
          <List.Item className='align'>
            <Label muted italic>
              <small>No results found. Try searching for something else.</small>
            </Label>
          </List.Item>
        }
      </List>
    </Box>
  )
}

export default jss(styles)(Sidebar)

function highlight(className, text, positions) {
  const letters = text.split('')
  const elements = []

  let lastPosition = 0
  let i = 0
  for (; i < positions.length; i++) {
    const start = positions[i]
    let end = start + 1

    while (i < positions.length) {
      if (positions[i + 1] === end) {
        i++
        end++
        continue
      }
      break
    }

    elements.push(text.slice(lastPosition, start))
    elements.push(
      <span key={i} className={className}>
        {text.slice(start, end)}
      </span>
    )
    lastPosition = end
  }
  elements.push(text.slice(lastPosition))

  return elements.filter(Boolean)
}
