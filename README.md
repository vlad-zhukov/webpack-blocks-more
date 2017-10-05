# webpack-blocks-more · [![npm](https://img.shields.io/npm/v/webpack-blocks-more.svg)](https://npm.im/webpack-blocks-more)

> Just a few blocks that 📦[webpack-blocks](https://github.com/andywer/webpack-blocks) is missing.

Designed to be used with `webpack@3+` and `webpack-blocks@1+`.

## Table of Content

- [API](#api)
  - [`setEnv([options])`](#setenvoptions)
  - [`watch([options])`](#watchoptions)
  - [`parser([options])`](#parseroptions)
  - [`image([options])`](#imageoptions)
  - [`stylus([options])`](#stylusoptions)
  - [`extract([options])`](#extractoptions)

## API

### `setEnv([options])`

Sets environmental variables to `process.env` and [`EnvironmentPlugin`](https://webpack.js.org/plugins/environment-plugin/).

__Arguments__

1. `[options]` _(Array|Object)_: Any enumerable properties.

__Example__

```js
setEnv({
  NODE_ENV: 'development',
  HOT: true,
})
```

---

### `watch([options])`
Watch mode.

__Arguments__

1. `[options]` _(Object)_: See [`watchOptions`](https://webpack.js.org/configuration/watch/#watchoptions) for available properties.

---

### `parser([options])`
Parser options.

__Arguments__

1. `[options]` _(Boolean|Object)_: See [`Rule.parser`](https://webpack.js.org/configuration/module/#rule-parser)

__Example__

```js
const {createConfig} = require('@webpack-blocks/webpack');
const {parser} = require('webpack-blocks-more');

module.exports = createConfig([
  parser({
    amd: false,
    browserify: false,
    requireJs: false,
    system: false,
    requireInclude: false,
    requireEnsure: false,
  }),
]);
```

---

### `image([options])`

__Arguments__

1. `[options]` _(Object)_: [`image-webpack-loader`](https://github.com/tcoopman/image-webpack-loader) options.

__Example__

```js
const {createConfig, match} = require('@webpack-blocks/webpack');
const {file} = require('@webpack-blocks/assets');
const {image} = require('webpack-blocks-more');

module.exports = createConfig([
  match(['*.jpg', '*.png'], [
    file(),
    image(),
  ]),
]);
```

---

### `stylus([options])`

__Arguments__

1. `[options]` _(Object)_: [`stylus-loader`](https://github.com/shama/stylus-loader) options.

__Example__

```js
const {createConfig, match} = require('@webpack-blocks/webpack');
const {file, css} = require('@webpack-blocks/assets');
const {extract, stylus} = require('webpack-blocks-more');

module.exports = createConfig([
  // for development:
  match('*.styl', [
    css(),
    stylus(),
  ]),

  // for production:
  match('*.styl', [
    file({
      name: '[hash:20].css',
    }),
    extract(),
    css({
      styleLoader: false,
    }),
    stylus(),
  ]),
]);
```

---

### `extract([options])`

__Arguments__

1. `[options]` _(Object)_: [`extract-loader`](https://github.com/peerigon/extract-loader) options.

__Example__

```js
const {createConfig, match} = require('@webpack-blocks/webpack');
const {file, css} = require('@webpack-blocks/assets');
const {extract} = require('webpack-blocks-more');

module.exports = createConfig([
  match('*.css', [
    file({
      name: '[hash:20].css',
    }),
    extract(),
    css({
      styleLoader: false,
    }),
  ]),
]);
```

---
