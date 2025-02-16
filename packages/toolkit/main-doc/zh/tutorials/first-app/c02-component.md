---
title: 编写 UI 组件
---

上一章节中，我们学习了如何初始化项目，并使用配置修改 Modern.js 的默认行为。

这一章节中，我们继续沿用上一章节的项目代码，继续完善联系人列表。

为了做更好的 UI 展示和交互，我们引入组件库 [Antd](https://ant.design/index-cn) 来开发，使用 `<List>` 组件来代替原始的列表。先添加依赖：

```bash
pnpm add antd
```

修改 `src/routes/page.tsx`，在顶部导入组件：

```ts
import { List } from 'antd';
```

修改 `<App>` 组件的实现：

```tsx
function App() {
  return (
    <div>
      <List
        dataSource={mockData}
        renderItem={({ name, email, avatar }) => (
          <List.Item key={name}>
            <List.Item.Meta
              avatar={<img alt="avatar" src={avatar} width={60} height={60} />}
              title={name}
              description={email}
            />
          </List.Item>
        )}
      />
    </div>
  );
}
```

执行 `pnpm run dev`，查看运行结果：

![result](https://lf3-static.bytednsdoc.com/obj/eden-cn/nuvjhpqnuvr/modern-website/tutorials/c02-antd-result.png)

可以看到 Ant Design 导出的组件，已经具备了完整的样式。

:::info 注
Modern.js 会[自动按需导入 Ant Design 组件需要的 CSS](https://github.com/ant-design/babel-plugin-import)。
:::

:::note
我们也可以使用其他组件库来实现同样的功能，例如 [Arco Design](https://arco.design/)。
:::
