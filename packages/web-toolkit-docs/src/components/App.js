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

import routes from './routes'
import Main from './Main'
import Sidebar from './Sidebar'
import './App.css'

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Box vertical compact className='App background'>
        <Paned defaultSize={230} fill border='handle'>
          <Sidebar />
          <Switch>
            {routes.map(route =>
              <Route
                key={route.path}
                path={route.path}
                exact={route.exact}
                render={() =>
                  /* Main is here with a `key` to reset the scroller on page change */
                  <Main key={route.path}>
                    {route.render()}
                  </Main>
              }
              />
            )}
          </Switch>
        </Paned>
      </Box>
    </Router>
  )
}

export default App
