import React from 'react'
import { Link, useLocation } from "react-router-dom";
import {
  Label,
  List,
} from 'web-toolkit'
import metadata from '../properties.json'

export default function Sidebar() {
  const location = useLocation()
  const sections = Object.values(metadata)
    .map(component => ({
      label: component.name,
      url: `/${component.name}`,
    }))

  return (
    <List border={false} fill sidebar='navigation'>
      {sections.map(section =>
        <List.Item
          as={Link}
          to={section.url}
          key={section.label}
          className='align'
          activatable
          selected={section.url === location.pathname}
        >
          <Label>{section.label}</Label>
        </List.Item>
      )}
    </List>
  )
}
