# web-toolkit

This is a work in progress web toolkit using GTK's default theme, Adwaita.

[See live demo](https://romgrk.github.io/web-toolkit-example/)

**HELP WANTED**: I need help to make this into a production-ready library.
Come help me! Checkout the open issues or [ask here](https://github.com/romgrk/web-toolkit/issues/2)
if you're unsure how you can help.

## Why

All UI design frameworks suck. No one knows how to design. Except for Gnome designers
strangely.  And maybe Apple too, but they're not in the OSS business so I avoid them.

## Screenshots

![demo-1](https://raw.githubusercontent.com/romgrk/web-toolkit/master/static/demo-1.png)
![demo-2](https://raw.githubusercontent.com/romgrk/web-toolkit/master/static/demo-2.png)
![demo-3](https://raw.githubusercontent.com/romgrk/web-toolkit/master/static/demo-3.png)
![demo-4](https://raw.githubusercontent.com/romgrk/web-toolkit/master/static/demo-4.png)

## Roadmap

The first goal is to port Adwaita.css for web usage, which means removing every GTK+ CSS
proprietary quirks.

The second goal is to create components to make it easy to use the framework. For now the
demo components are being created with React but I've been thinking about making a Solid
version. But the first goal should allow any UI framework to reuse the CSS classes.

## Contributions

To start coding, clone the project, run `npm install`, then run `npm start` to spawn the
dev server. You need to have `sassc` installed.

## License

Undecided yet. I use MIT usually but the CSS files of the GTK project were reused so I'm not
sure it can be licensed as MIT or if it needs to be LGPL. Either way, best case it's MIT
worst case it's LGPL, which is still permissive and allows commercial use so it's fine.
