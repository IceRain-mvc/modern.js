---
extractApiHeaders: [2]
---

# Plugin Core

本章节描述了 Builder 插件核心的类型定义和 API。

## BuilderPlugin

插件对象的类型，插件对象包含以下属性：

- `name`：插件的名称，唯一标识符。
- `setup`：插件逻辑的主入口函数，可以是一个异步函数。该函数仅会在初始化插件时执行一次。

```ts
type BuilderPlugin<API = BuilderPluginAPI> = {
  name: string;
  setup: (api: API) => Promise<void> | void;
};
```

你可以从 `@modern-js/builder` 中导入该类型：

```ts
import type { BuilderPlugin } from '@modern-js/builder';

export default (): BuilderPlugin => ({
  name: 'builder-plugin-foo',

  setup: api => {
    api.onAfterBuild(() => {
      console.log('after build!');
    });
  },
});
```

## BuilderPluginAPI

插件 API 对象的类型。插件 API 对象上挂载了提供给插件使用的上下文数据、工具函数和注册生命周期钩子的函数。

关于生命周期钩子的完整介绍，请阅读 [Plugin Hooks](./plugin-hooks) 章节。

在使用 webpack provider 或 rspack provider 时，`BuilderPluginAPI` 的类型定义有一定不同，你可以根据插件的使用场景来引入对应的类型。

### 适用于 webpack provider 的插件

开发适用于 webpack provider 的插件时，请从 `@modern-js/builder-webpack-provider` 中引入 `BuilderPluginAPI`。

```ts
import type { BuilderPlugin } from '@modern-js/builder';
import type { BuilderPluginAPI } from '@modern-js/builder-webpack-provider';

export default (): BuilderPlugin<BuilderPluginAPI> => ({
  name: 'builder-plugin-foo',

  setup: api => {
    api.modifyWebpackConfig(config => {
      config.devtool = false;
    });
  },
});
```

### 适用于 rspack provider 的插件

开发适用于 rspack provider 的插件时，请从 `@modern-js/builder-rspack-provider` 中引入 `BuilderPluginAPI`。

```ts
import type { BuilderPlugin } from '@modern-js/builder';
import type { BuilderPluginAPI } from '@modern-js/builder-rspack-provider';

export default (): BuilderPlugin<BuilderPluginAPI> => ({
  name: 'builder-plugin-foo',

  setup: api => {
    api.modifyRspackConfig(config => {
      config.devtool = false;
    });
  },
});
```

## api.context

`api.context` 是一个只读对象，提供一些上下文信息。

`api.context` 的内容与 `builder.context` 完全一致，请参考 [builder.context](/api/builder-instance.html#builder-context)。

- **Example**

```ts
const PluginFoo = () => ({
  setup(api) {
    console.log(api.context.distPath);
  }
);
```

## api.getBuilderConfig

!!!include(./src/zh/shared/getBuilderConfig.md)!!!

- **Example**

```ts
const PluginFoo = () => ({
  setup(api) {
    const config = api.getBuilderConfig();
    console.log(config.html?.title);
  }
);
```

## api.getNormalizedConfig

!!!include(./src/zh/shared/getNormalizedConfig.md)!!!

- **Example**

```ts
const PluginFoo = () => ({
  setup(api) {
    const config = api.getNormalizedConfig();
    console.log(config.html.title);
  }
);
```

## api.isPluginExists

!!!include(./src/zh/shared/isPluginExists.md)!!!

- **Example**

```ts
export default () => ({
  setup: api => {
    console.log(api.isPluginExists('builder-plugin-foo'));
  },
});
```

## api.getHTMLPaths

!!!include(./src/zh/shared/getHTMLPaths.md)!!!

- **Example**

```ts
const PluginFoo = () => ({
  setup(api) {
    api.modifyWebpackChain(() => {
      const htmlPaths = api.getHTMLPaths();
      console.log(htmlPaths); // { main: 'html/main/index.html' };
    });
  }
);
```
