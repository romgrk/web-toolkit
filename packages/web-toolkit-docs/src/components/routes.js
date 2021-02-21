import React from 'react'
import metadata from '../properties.json'

import DocPage from './DocPage'
import Home from './Home'

const basePath = ''

const indexRoutes = [
  {
    label: 'Home',
    path: '/',
    exact: true,
    render: () => <Home />
  },
]

const componentRoutes =
  Object.values(metadata)
    .map(component => ({
      label: component.name,
      path: `/component/${component.name.toLowerCase()}`,
      render: () => <DocPage data={component} />,
    }))

const routes = []
  .concat(indexRoutes)
  .concat(componentRoutes)
    .map(r => {
      r.path = basePath + r.path
      return r
    })

export default routes
