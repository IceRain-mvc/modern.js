# Stylus 插件

Stylus 是一个富于表现力、动态的、健壮的 CSS 预处理器，本章节介绍如何在 Builder 中使用 Stylus。

## 快速开始

### 安装插件

你可以通过如下的命令安装插件:

```bash
# npm
npm install @modern-js/builder-plugin-stylus -D

# yarn
yarn add @modern-js/builder-plugin-stylus -D

# pnpm
pnpm install @modern-js/builder-plugin-stylus -D
```

### 注册插件

在 Modern.js / EdenX 等上层框架中，你可以通过 `builderPlugins` 配置项来注册 Stylus 插件：

```ts
import { PluginStylus } from '@modern-js/builder-plugin-stylus';

export default {
  builderPlugins: [PluginStylus()],
};
```

当你直接调用 Builder 的 Node API 时，可以通过 `addPlugins` 方法来注册 Stylus 插件：

```js
import { PluginStylus } from '@modern-js/builder-plugin-stylus';

// 往 builder 实例上添加插件
builder.addPlugins([PluginStylus()]);
```

## 示例

安装完插件后，你可以直接在代码中引入 `*.styl` 或 `*.module.styl` 文件，无须添加其他配置。

- `normalize.styl`:

```styl
body
  color #000
  font 14px Arial, sans-serif
```

- `title.module.styl`:

```styl
.title
  font-size: 14px;
```

- `index.js`:

```js
import './normalize.styl';
import style from './title.module.styl';

console.log(style.title);
```

## 配置

如果你需要自定义 Stylus 的编译行为，可以使用以下配置项。

### stylusOptions

- Type:

```ts
type StylusOptions = {
  use?: string[];
  include?: string;
  import?: string;
  resolveURL?: boolean;
  lineNumbers?: boolean;
  hoistAtrules?: boolean;
};
```

- Default: `undefined`

传递给 Stylus 的选项，请查阅 [Stylus 文档](https://stylus-lang.com/docs/js.html) 来了解具体用法。

```ts
PluginStylus({
  stylusOptions: {
    lineNumbers: false,
  },
});
```

### sourceMap

- Type: `boolean`
- Default: `isDev`

是否生成 Source Map，默认在开发环境下启用。

```ts
PluginStylus({
  sourceMap: false,
});
```
