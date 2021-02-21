# web-toolkit

This is a web toolkit using GTK's default theme, Adwaita. The framework is currently
usable but is to be considered in **alpha** state, as a few parts are still raw and
the API is subject to change until the 1.0.0 release.

[Live Demo](https://romgrk.github.io/web-toolkit/demo) | [Documentation (WIP)](https://romgrk.github.io/web-toolkit/docs)

## Why

All UI design frameworks suck. No one knows how to design. Except for Gnome designers
strangely. And maybe Apple too, but they're not in the OSS business so I avoid them.

## Showcase

![demo-1](https://raw.githubusercontent.com/romgrk/web-toolkit/master/static/demo-1.png)
![demo-2](https://raw.githubusercontent.com/romgrk/web-toolkit/master/static/demo-2.png)
![demo-3](https://raw.githubusercontent.com/romgrk/web-toolkit/master/static/demo-3.png)
![demo-4](https://raw.githubusercontent.com/romgrk/web-toolkit/master/static/demo-4.png)

## Usage

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

## Roadmap

The first goal is to port Adwaita.css for web usage, which means removing every GTK+ CSS
proprietary quirks.

The second goal is to create components to make it easy to use the framework. For now the
demo components are being created with React but I've been thinking about making a Solid
version. But the first goal should allow any UI framework to reuse the CSS classes.

## Help Wanted!

I need help to make this into a production-ready library.
Come help me! Checkout the open issues or [ask here](https://github.com/romgrk/web-toolkit/issues/2)
if you're unsure how you can help.

## Contributions

To start coding, clone the project, go to `./packages/web-toolkit`, run `pnpm install`,
then run `pnpm start` to spawn the dev server. You need to have `sassc` installed.

**IMPORTANT**: This project uses [pnpm](https://pnpm.js.org/) for development.

## License

MIT
