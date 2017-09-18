# webpack-blocks-more · [![npm](https://img.shields.io/npm/v/webpack-blocks-more.svg)](https://npm.im/webpack-blocks-more)

> Just a few blocks that 📦[webpack-blocks](https://github.com/andywer/webpack-blocks) is missing.

Designed to be used with `webpack@3+` and `webpack-blocks@1+`.

## Table of Content

- [API](#api)
  - [`setEnv([options])`](#setenvoptions)
  - [`watch([options])`](#watchoptions)
  - [`parser([options])`](#parseroptions)
  - [`babel([options])`](#babeloptions)
  - [`stylus([options])`](#stylusoptions)

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

- `[options]` _(Boolean|Object)_: See [`Rule.parser`](https://webpack.js.org/configuration/module/#rule-parser)

---

### `babel([options])`

Built on top of [`babel-loader`](https://github.com/babel/babel-loader).

__Arguments__

1. `[options]` _(Object)_: `babel-loader` options.

__Example__

```js
const {createConfig, match} = require('@webpack-blocks/webpack');
const {babelLoader} = require('webpack-blocks-more');

module.exports = createConfig([
  match('*.js', {exclude: /node_modules/}, [
    babel({
      cacheDirectory: true,
    }),
  ]),
]);
```

---

### `stylus([options])`

Built on top of [`stylus-loader`](https://github.com/shama/stylus-loader),
[`css-loader`](https://github.com/webpack-contrib/css-loader),
[`file-loader`](https://github.com/webpack-contrib/file-loader)
and [`extract-loader`](https://github.com/peerigon/extract-loader).

__Arguments__

1. `[options]` _(Object)_:
  - `[fileOptions]` _(Object)_: `file-loader` options.
  - `[extractOptions]` _(Object): `extract-loader` options.
  - `[cssOptions]` _(Object)_: `css-loader` options.
  - `[stylusOptions]` _(Object)_: `stylus-loader` options.

__Example__

```js
const {createConfig, match} = require('@webpack-blocks/webpack');
const {stylus} = require('webpack-blocks-more');

module.exports = createConfig([
  match(['*.styl', '*.stylus'], [
    stylus({
      fileOptions: {
        name: 'bundle.css',
      },
      stylusOptions: {
        preferPathResolver: 'webpack',
      },
    }),
  ]),
]);
```

---
