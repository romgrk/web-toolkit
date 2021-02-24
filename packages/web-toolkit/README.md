<h1 align="center">
  web-toolkit
</h1>

<p align="center">
  <b>A GTK inspired React UI framework</b>
</p>

This is a web toolkit using GTK's default theme, Adwaita. The framework is currently
usable but is to be considered in **alpha** state, as a few parts are still raw and
the API is subject to change until the 1.0.0 release.


<p align="center">
  <a href="#installation">Installation</a> •
  <a href="https://romgrk.github.io/web-toolkit/demo">Demo</a> •
  <a href="https://romgrk.github.io/web-toolkit/docs">Documentation</a> •
  <a href="#license">License</a>
</p>


## Why

There are quite a few alternatives, such as bootstrap, material-ui, semantic-ui or
ant-design. I've however found that most of them fail in one way or another to
satisfy what I'm looking for in a UI framework. Most important than anything, I
want something that looks stunning by default, while being functional.

## Showcase

![demo-1](https://raw.githubusercontent.com/romgrk/web-toolkit/master/static/demo-1.png)
![demo-2](https://raw.githubusercontent.com/romgrk/web-toolkit/master/static/demo-2.png)
![demo-3](https://raw.githubusercontent.com/romgrk/web-toolkit/master/static/demo-3.png)
![demo-4](https://raw.githubusercontent.com/romgrk/web-toolkit/master/static/demo-4.png)

## Installation

```
npm instal --save web-toolkit
```

```javascript
import React from 'react'
import {
  Box,
  Button,
  Input,
  Paned,
} from 'web-toolkit'
import 'web-toolkit/lib/index.css'

function App() {
  return (
    <div className='App background Box vertical compact'>
      <Paned defaultSize={200} fill border='handle'>
        <Box vertical>
          I'm a sidebar
        </Box>
        <Box fill vertical>
          <Input.Group>
            <Input />
            <Button>Submit</Button>
          </Input.Group>
        </Box>
      </Paned>
    </div>
  )
}

export default App
```

At the moment, the [source code](https://github.com/romgrk/web-toolkit/blob/master/packages/web-toolkit/src/demo/App.js)
for the [live demo](https://romgrk.github.io/web-toolkit/) is the best place to understand how to use the framework.

Some [documentation](https://romgrk.github.io/web-toolkit/docs) is also available
but is a work in progress and not complete yet.

## Help Wanted!

I need help to make this into a production-ready library.
Come help me! Checkout the open issues or [ask here](https://github.com/romgrk/web-toolkit/issues/2)
if you're unsure how you can help.

## Roadmap

All of the required components for a first usable version have been implemented. Some
more complex components are being implemented, and the documention still needs to be
completed. While the components are usable, most of them are missing accessibility
ARIA attributes and may need fine-tuning for keyboard usage.

## Contributions

To start coding, clone the project, go to `./packages/web-toolkit`, run `pnpm install`,
then run `pnpm start` to spawn the dev server. You need to have `sassc` installed.

**IMPORTANT**: This project uses [pnpm](https://pnpm.js.org/) for development.

## License

MIT
