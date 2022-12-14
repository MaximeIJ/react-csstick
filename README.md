# react-csstick

[![npm (scoped)](https://img.shields.io/npm/v/@maximeij/react-csstick?color=green&label=npm%20package&logo=logo)](https://www.npmjs.com/package/@maximeij/react-csstick)

CSS Stick figures and comics

## Features

- Components
  - Comic - Scenes laid out in a pattern
  - Scene - Container for Stick figures to be displayed in
  - Stick - CSS Stick figure with customizable position
  - TextBubble - Rudimentary box with controllable props

Try it live at https://lynxlab.xyz/stick

## Use

You need to import the css once in a parent Component

```
import '@maximeij/react-csstick/css';
```

You can then import individual Components and resources as needed

```
import {Comic, ComicPresets, type ComicProps} from '@maximeij/react-csstick';
```

### Coming soon

- Animations
- Working Storybooks
- Improvements: Comic layout, Text Bubble style
- Stick Accessories: Clothing, Items

### Recent changes

- [Changelog](CHANGELOG.md)
