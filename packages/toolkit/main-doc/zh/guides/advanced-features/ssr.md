---
title: 服务端渲染（SSR）
sidebar_position: 3
---

在 Modern.js 中，SSR 也是开箱即用的。开发者无需为 SSR 编写复杂的服务端逻辑，也无需关心 SSR 的运维，或是创建单独的服务。Modern.js 拥有完备的 SSR 降级策略，保证页面能够安全运行。

启用 SSR 非常简单，只需要设置 [`server.ssr`](/docs/configure/app/server/ssr) 为 `true` 即可：

```json
{
  "server": {
    "ssr": true
  }
}
```

## SSR 时的数据获取

Modern.js 中提供了 Data Loader，方便开发者在 SSR、CSR 下同构的获取数据。每个路由模块，如 `layout.tsx` 和 `page.tsx` 都可以定义自己的 Data Loader：

```ts title="src/routes/page.tsx"
export const loader = () => {
  return {
    message: 'Hello World',
  };
};
```

在组件中可以通过 Hooks API 的方式获取 `loader` 函数返回的数据：

```tsx
export default () => {
  const data = useLoaderData();
  return <div>{data.message}</div>;
}
```

Modern.js 打破传统的 SSR 开发模式，提供了用户无感的 SSR 开发体验。并且提供了优雅的降级处理，一旦 SSR 请求失败，会自动降级在浏览器端重新发起请求。

不过，开发者仍然需要关注数据的兜底处理，例如 `null` 值或不符合预期的数据返回。避免在 SSR 时产生 React 渲染错误或是返回凌乱的渲染结果。

:::info 补充信息
使用 Data Loader 时，数据获取发生在渲染前，Modern.js 也仍然支持在组件渲染时获取数据。更多相关内容可以查看[数据获取](/docs/guides/basic-features/data-fetch)。
:::

## 保持渲染一致

有些业务中，通常需要根据当前的运行容器环境特征做不同的 UI 展示，例如 [UA](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/User-Agent) 信息。如果处理不够仔细，此时很有可能出现不符合预期的渲染结果。

这里通过一个例子，演示当 SSR 与 CSR 渲染不一致时出现的问题，在组件中添加以下代码：

```tsx
{
  typeof window !== 'undefined' ? (
    <div>
      browser content
    </div>
  ) : null;
}
```

启动应用后，访问页面，会发现浏览器控制台抛出警告信息：

```sh
Warning: Expected server HTML to contain a matching <div> in <div>.
```

这是 React 在客户端执行 hydrate 逻辑时，发现渲染结果与 SSR 渲染结果不一致造成的。虽然页面表现正常，但在复杂应用中，很有可能因此出现 DOM 层级混乱、样式混乱等问题。

:::info 注
关于 hydrate (注水)逻辑请参考[这里](https://reactjs.org/docs/react-dom.html#hydrate)。
:::

应用需要保持 SSR 与 CSR 渲染结果的一致性，如果存在不一致的情况，说明这部分内容无需在 SSR 中进行渲染。Modern.js 为这类在 SSR 中不需要渲染的内容提供 [`<NoSSR>` 工具组件](/docs/apis/app/runtime/core/use-runtime-context)：

```ts
import { NoSSR } from '@modern-js/runtime/ssr';
```

在不需要进行 SSR 的元素外部，用 `NoSSR` 组件包裹：

```tsx
<NoSSR>
  <div>
    client content
  </div>
</NoSSR>
```

修改代码后，刷新页发现之前的 Waring 消失。打开浏览器开发者工具的 Network 窗口，查看返回的 HTML 文档是不包含 `NoSSR` 组件包裹的内容的。

:::info 补充信息
[`useRuntimeContext`](/docs/apis/app/runtime/core/use-runtime-context) 可以获取完整的请求信息，可以利用它保证 SSR 与 CSR 的渲染结果一致。
:::

## 关注内存泄漏

:::warning 警告
在 SSR 场景下，开发者需要特别关注内存泄露问题，即使是微小的内存泄露，在大量的访问后也会对服务造成影响。
:::

SSR 时，浏览器的每次请求，都会触发服务端重新执行一次组件渲染逻辑。所以，需要避免在全局定义任何可能不断增长的数据结构，或在全局进行事件订阅，或创建不会被销毁的流。

例如以下代码，使用 [redux-observable](https://redux-observable.js.org/) 时，习惯了 CSR 的开发者通常会在组件中这样编码：

```tsx
/* 代码仅作为示例，不可运行 */
import { createEpicMiddleware, combineEpics } from 'redux-observable';

const epicMiddleware = createEpicMiddleware();
const rootEpic = combineEpics();

export default function Test() {
  epicMiddleware.run(rootEpic);
  return <div>Hello Modern.js</div>;
}
```

在组件外层创建 Middleware 实例 `epicMiddleware`，并在组件内部调用 `epicMiddleware.run`。

在浏览器端，这段代码不会造成任何问题，但是在 SSR 时，Middleware 实例会一直无法被销毁。每次渲染组件，调用 `epicMiddleware.run(rootEpic)` 时，都会在内部添加新的事件绑定，导致整个对象不断变大，最终对应用性能造成影响。

CSR 中这类问题不易被发觉，因此从 CSR 切换到 SSR 时，如果不确定应用是否存在这类隐患，可以对应用进行压测。

## 收敛服务端数据

为了保持 SSR 阶段请求的数据，可以在浏览器端直接使用，Modern.js 会将渲染过程中收集的数据与状态注入到 HTML 内。但是，CSR 应用常常存在接口数据量大、组件状态未收敛的情况，这时如果直接使用 SSR，渲染得到的 HTML 体积可能会存在过大的问题。此时，SSR 不仅无法为应用带来用户体验上的提升，反而可能起到相反的作用。

因此，使用 SSR 时，**开发者需要为应用做合理的瘦身**：

1. 关注首屏，SSR 中可以只请求首屏需要的数据，并在浏览器端渲染剩余的部分。
2. 将与渲染无关的数据，从接口返回数据中剔除。

## Serverless Pre-render

Modern.js 提供 Serverless Pre-rendering (SPR) 这一特性来提升 SSR 性能。

SPR 利用预渲染与缓存技术，为 SSR 页面提供静态 Web 的响应性能。它让 SSR 应用拥有静态 Web 页面的响应速度与稳定性，同时还能保持数据的动态更新。

在 Modern.js 中使用 SPR 非常简单，只需要在组件中新增 `PreRender` 组件，该组件所在的页面就会自动开启 SPR。

这里模拟一个使用 `useLoaderData` API 的组件，Data Loader 中的请求需要消耗 2s 时间。

```jsx
import { useLoaderData } from '@modern-js/runtime/router';

export const loader = async () => {
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(null);
    }, 2000);
  });

  return {
    message: 'Hello Modern.js',
  };
};

export default () => {
  const data = useLoaderData();
  return <div>{data?.message}</div>;
};
```

执行 `dev` 命令后，打开页面，可以明显的察觉到页面需要等到 2s 后才返回。

接下来使用 `PreRender` 组件来进行优化，该组件可以直接从 `@modern-js/runtime/ssr` 中导出：

```ts
import { PreRender } from '@modern-js/runtime/ssr';
```

在路由组件内使用 `PreRender` 组件，并设置参数 `interval`，用于表示该次渲染结果的过期时间为 5s：

```tsx
<PreRender interval={5} />
```

修改后，执行 `pnpm run build && pnpm run serve` 启动应用，并打开页面。

首次打开时，和之前的渲染并没有什么不同，同样存在 2s 延迟。点击刷新，页面瞬间打开，但此时，页面数据并没有因为刷新发生变化，这是因为缓存还没有过期。

等待 5s，重新刷新页面，页面的数据仍然没有变化。再一次刷新页面数据发生变化，但是页面仍然几乎是瞬间响应的。
这是因为在之前的请求时，SPR 已经在后台异步获取了新的渲染结果，本次请求到的页面是已经缓存在服务器中的版本。

可以想象，当 `interval` 设置为 1 时，用户可以在感知到实时数据的同时，拥有静态页面的响应体验。

:::info 补充信息
`PreRender` 的详细使用可以参考[这里](/docs/apis/app/runtime/ssr/pre-render)。
:::

## Treeshaking

开启 SSR 时，Modern.js 会用相同的入口，构建出 SSR Bundle 和 CSR Bundle 两份产物。因此，在 SSR Bundle 中存在 Web API，或是在 CSR Bundle 中存在 Node API 时，都可能导致运行出错。

在组件中引入 Web API，通常情况下是要做一些全局监听，或是获取浏览器相关的数据，例如：

```tsx
document.addEventListener('load', () => {
  console.log('document load');
});
const App = () => {
  return <div>Hello World</div>
}
export default App;
```

在组件文件中引入 Node API，通常情况下是因为使用了 Data Loader，例如：

```ts
import fse from 'fs-extra';
export const loader = () => {
  const file = fse.readFileSync('./myfile');
  return {
    ...
  };
};
```

### 环境变量区分

对于第一种情况，我们可以直接使用 Modern.js 内置的环境变量 `MODERN_TARGET` 进行判断，在构建时删除无用代码：

```ts
if (process.env.MODERN_TARGET === 'browser') {
  document.addEventListener('load', () => {
    console.log('document load');
  });
}
```

:::note
更多内容可以查看[环境变量](/docs/guides/basic-features/env-vars)。
:::

### 文件后缀区分

但例如第二种情况，Treeshaking 的方式并不能保证代码被完全分离。Modern.js 也支持通过 `.node.` 后缀的文件来区分 SSR Bundle 和 CSR Bundle 产物的打包文件。

例如在代码中引入了 `fs-extra`，这时候直接引用到组件中，会造成 CSR 加载报错。可以创建同名的 `.ts` 和 `.node.ts` 文件做一层代理：

```ts title="compat.ts"
export { readFileSync } from 'fs-extra';
```

```ts title="compat.node.ts"
export const readFileSync: any = () => {};
```

在文件中直接引入 `./compat`，此时 SSR 环境下会优先使用 `.node.ts` 后缀的文件，CSR 环境下会使用 `.ts` 后缀的文件。

```ts title="App.tsx"
import { readFileSync } from './compat'

export const loader = () => {
  const file = readFileSync('./myfile');
  return {
    ...
  };
};
```

### 独立文件

上述两种方式，都会为开发者带来一些心智负担。Modern.js 基于[嵌套路由](/docs/guides/basic-features/routes)开发设计了[更简单的方案](/docs/guides/basic-features/data-fetch)来分离 CSR 和 SSR 的代码。

## 接口请求

在 SSR 中发起接口请求时，开发者有时自己封装了同构的请求工具。部分接口需要传递用户 Cookie，开发者可以通过 [`useRuntimeContext`](/docs/guides/basic-features/data-fetch#route-loader) API 获取到请求头来实现。

需要注意的是，此时获取到的是 HTML 请求的请求头，不一定适用于接口请求，因此**千万不能**透传所有请求头。并且，一些后端接口，或是通用网关，会根据请求头中的信息做校验，全量透传容易出现各种难以排查的问题，推荐**按需透传**。

如果实在需要透传所有请求头，请务必过滤 `host` 字段。

## 流式渲染

Modern.js 支持了 React 18 的流式渲染，可以通过如下配置修改默认的渲染模式：

```json
{
  "server": {
    "ssr": {
      "mode": "stream"
    }
  }
}
```

:::note
目前 Modern.js 内置的数据获取方式还未支持流式渲染，如迫切需要开发者可以按照 React Stream SSR 的 Demo 自建。
:::
