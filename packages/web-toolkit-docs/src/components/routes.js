import React from 'react'
import metadata from '../properties.json'

import DocPage from './DocPage'
import Home from './Home'

const indexRoutes = [
  {
    label: 'Home',
    path: '/',
    exact: true,
    render: () => <Home />
  },
]

// FIXME: to be used
export const categories = {
  layout: {
    name: 'Layout',
    items: [
      'Box',
      'Frame',
      'HeaderBar',
      'List',
      'PageSwitcher',
      'Paned',
    ]
  },

  input: {
    name: 'Input',
    items: [
      'Autocomplete',
      'Button',
      'Calendar',
      'Checkbox',
      'DatePicker',
      'Dropdown',
      'Input',
      'InputNumber',
      'Radio',
      'Range',
      'Switch',
      'TextArea',
    ]
  },

  display: {
    name: 'Display',
    items: [
      'Expander',
      'Icon',
      'InfoBar',
      'Label',
      'LevelBar',
      'MenuBar',
      'Menu',
      'Notebook',
      'Popover',
      'PopoverMenu',
      'Progress',
      'Separator',
      'Spinner',
      'Table',
      'Text',
      'Toolbar',
    ]
  }
}

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

export default routes
