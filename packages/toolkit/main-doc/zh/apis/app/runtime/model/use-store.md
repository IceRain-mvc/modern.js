---
sidebar_position: 9
title: useStore
---

import ReduckTip from '@site-docs/components/reduck-tip.md'

<ReduckTip />

`useStore` 用于获取当前组件树共享的 Store。常用于在组件外访问 Model 的场景。注意，`useStore` 是一个 React Hook，只能在组件内使用。


## 函数签名

```ts
function useStore(): ReduckStore;
```

### 返回值

- ReduckStore：Reduck Store，类型参考 [createStore](./create-store.md) 返回值。


:::info 更多参考
[使用 Model](/docs/guides/topic-detail/model/use-model#在组件外使用)
:::
