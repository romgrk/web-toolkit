import React from 'react'
import { HeaderBar } from 'web-toolkit'

import Content from './Content'

export default function Home() {
  return (
    <Content>
      <h1>web-toolkit</h1>
      <p>
        Web-Toolkit is a react UI framework base on the GTK's adwaita theme.
        It provides high-quality components that are meant to facilitate the
        implementation of desktop web apps.
      </p>
    </Content>
  )
}
