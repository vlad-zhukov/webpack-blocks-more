# webpack-blocks-more · [![npm](https://img.shields.io/npm/v/webpack-blocks-more.svg)](https://npm.im/webpack-blocks-more)

> A set of well-thought 📦[webpack-blocks](https://github.com/andywer/webpack-blocks) for real-world projects.

Designed to be used with `webpack@3+` and `webpack-blocks@1+`.

## Table of Content

- [API](#api)
  - [`setEnv([options])`](#setenvoptions)
  - [`watch([options])`](#watchoptions)
  - [`reactHotServer([options])`](#reacthotserveroptions)
  - [`babelLoader([options])`](#babelloaderoptions)

## API

### `setEnv([options])`

Sets environmental variables to `process.env` and [EnvironmentPlugin](https://webpack.js.org/plugins/environment-plugin/).

__Arguments__

- `[options]` _(Array|Object)_: Any enumerable properties.

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

- `[options]` _(Object)_: See [watchOptions](https://webpack.js.org/configuration/watch/#watchoptions) for available properties.

---

### `babelLoader([options])`

Built on top of [babel-loader](https://github.com/babel/babel-loader).

__Arguments__

- `[options]` _(Object)_: `babel-loader` options.

__Example__

```js
const {createConfig, match} = require('@webpack-blocks/webpack');
const {babelLoader} = require('webpack-blocks-more');

module.exports = createConfig([
    match('*.js', {exclude: /node_modules/}, [
        babelLoader({
            cacheDirectory: true,
        }),
    ]),
]);
```

---
