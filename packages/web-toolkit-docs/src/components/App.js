import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {
  Box,
  Paned,
} from 'web-toolkit'
import 'web-toolkit/lib/index.css'

import metadata from '../properties.json'
import DocPage from './DocPage'
import Header from './Header'
import Home from './Home'
import Main from './Main'
import Sidebar from './Sidebar'
import './App.css'

const routes = Object.values(metadata)
  .map(component => ({
    path: `/${component.name}`,
    render: () => <DocPage data={component} />
  }))

routes.push({
  path: '/',
  exact: true,
  render: () => <Home />
})

function App() {
  return (
    <Router>
      <div className='App background Box vertical compact'>
        <Header />
        <Paned defaultSize={200} fill border='handle'>
          <Sidebar />
          <Main>
            <Switch>
              {routes.map(route =>
                <Route key={route.path} {...route} />
              )}
            </Switch>
          </Main>
        </Paned>
      </div>
    </Router>
  )
}

export default App
