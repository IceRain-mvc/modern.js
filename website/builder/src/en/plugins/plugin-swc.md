# SWC plugin

[SWC](https://SWC.rs/) (Speedy Web Compiler) is a transformer and minimizer for JavaScript and TypeScript based on `Rust`. SWC can provide the same abilities with Babel, and it's more than 10x faster than Babel.

Modern.js Builder has a out-of-box plugin for SWC, power your Web application with Polyfill and minification, we also port some common used Babel plugins to SWC.

## Quick Start

### Install

You can install the plugin with the following command:

```bash
# npm
npm install @modern-js/builder-plugin-swc -D

# yarn
yarn add @modern-js/builder-plugin-swc -D

# pnpm
pnpm add @modern-js/builder-plugin-swc -D
```

### Register

In upper-level frameworks such as Modern.js or EdenX, you can register SWC plugin through the `builderPlugins` config:

```ts
import { PluginSwc } from '@modern-js/builder-plugin-swc';

export default {
  builderPlugins: [PluginSwc()],
};
```

If you are using the Builder's Node API, you can register SWC plugin through the `addPlugins` method:

```js
import { PluginSwc } from '@modern-js/builder-plugin-swc';

// add the plugin to the builder instance
builder.addPlugins([PluginSwc()]);
```

That's it !

Now you can use SWC transformation and minification in your project.

## Config

- Type: `PluginConfig`

```ts
type PluginConfig = {
  presetReact?: ReactConfig;
  presetEnv?: EnvConfig;
  jsMinify?: boolean | JsMinifyOptions;
  extensions?: Extensions;
};
```

### presetReact

- Type: [presetReact](https://swc.rs/docs/configuration/compilation#jsctransformreact) in SWC.

Ported from `@babel/preset-react`. The value you passed will be merged with default option.

By default, the plugin can set some fields based on your `tsconfig.json` file.

- runtime: `jsx` field in compilerOptions.
- importSource: `jsxImportSource` field in compilerOptions.
- pragma: `jsxFactory` field in compilerOptions.
- pragmaFrag: `jsxFragmentFactory` field in compilerOptions.

If there is no `tsconfig.json` file, default option is `{ runtime: 'automatic' }`.

### presetEnv

- Type: [presetEnv](https://swc.rs/docs/configuration/supported-browsers#options) in SWC.

Ported from `@babel/preset-env`. The value you passed will be merged with default option.

Default option is:

```ts
{
  targets: '', // automatic get browserslist from your project, so you don't have to set this field
  mode: 'usage',
}
```

### jsMinify

- Type: `boolean` or [compress configuration](https://terser.org/docs/api-reference.html#compress-options).

Default option is: `{ compress: {}, mangle: true }`.

If set it to `false`, then SWC minification will be disabled, if set it to `true` then will it applies default option. If you pass an object, then this object will be merged with default option.

### extensions

- Type: `Object`

Some plugins ported from Babel.

#### extensions.pluginImport

Ported from [babel-plugin-import](https://github.com/umijs/babel-plugin-import), configurations are the same.

Some configurations can be passed in functions, such as `customName`, `customStyleName`. These JavaScript functions will be called by Rust through Node-API, which will cause some performance overhead.

Some simple function logic can be replaced by template language. Therefore, the configuration of function items such as `customName`, `customStyleName` can also be passed in strings as templates to replace functions and improve performance.

For example:

```ts
import { MyButton as Btn } from 'foo';
```

Apply following configurations:

```ts
PluginSWC({
  extensions: {
    pluginImport: [
      {
        libraryName: 'foo',
        customName: 'foo/es/{{ member }}'
      },
    ],
  },
});
```

`{{ member }}` will be replaced by the imported specifier:

```ts
import Btn from 'foo/es/MyButton';
```

Template ```customName: 'foo/es/{{ member }}'``` is the same as ```customName: (member) => `foo/es/${member}` ```, but template value has no performance overhead of Node-API.

The template used here is [handlebars](https://handlebarsjs.com). There are some useful builtin tools, Take the above import statement as an example:

```ts
PluginSWC({
  extensions: {
    pluginImport: [
      {
        libraryName: 'foo',
        customName: 'foo/es/{{ kebabCase member }}',
      },
    ],
  },
});
```

Transformed to:

```ts
import Btn from 'foo/es/my-button';
```

In addition to `kebabCase`, there are `cameraCase`, `snakeCase`, `upperCase` and `lowerCase` can be used as well.

#### extensions.reactUtils

- Type: `Object`

```ts
type ReactUtilsOptions = {
  autoImportReact?: boolean;
  removeEffect?: boolean;
  removePropTypes?: {
    mode?: 'remove' | 'unwrap' | 'unsafe-wrap';
    removeImport?: boolean;
    ignoreFilenames?: string[];
    additionalLibraries?: string[];
    classNameMatchers?: string[];
  };
};
```

Some little help utils for `React`.

**reactUtils.autoImportReact**

- Type: `boolean`

Automatically import `React` as global variable, eg: `import React from 'react'`.
Mostly used for generated `React.createElement`.

**reactUtils.removeEffect**

- Type: `boolean`

Remove `useEffect` call.

**reactUtils.removePropTypes**

- Type:

```ts
type RemovePropTypesOptions = {
  mode?: 'remove' | 'unwrap' | 'unsafe-wrap';
  removeImport?: boolean;
  ignoreFilenames?: string[];
  additionalLibraries?: string[];
  classNameMatchers?: string[];
};
```

Remove `React` runtime type checking. This is ported from [@babel/plugin-react-transform-remove-prop-types](https://github.com/oliviertassinari/babel-plugin-transform-react-remove-prop-types), All the configurations remain the same.

#### extensions.lodash

- Type: `{ cwd?: string; ids?: string;}`
- Default: `{ cwd: process.cwd(), ids: [] }`

Ported from [@babel/plugin-lodash](https://github.com/lodash/babel-plugin-lodash).

## Limitation

Do not support `@babel/plugin-transform-runtime` and other custom Babel plugins.
