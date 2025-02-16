---
sidebar_position: 1
---

# CSS-in-JS

CSS-in-JS is a technology that can write CSS styles in JS files. Modern.js integrates the CSS-in-JS  library [styled-components](https://styled-components.com/) commonly used in the community, which uses the new feature of JavaScript [Tagged template](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#tagged_templates) to write CSS styles for components. You can use the [styled-components](https://styled-components.com/) API directly from `@modern-js/runtime/styled`.

When you need to write a `div` component with an internal font in red, you can do the following implementation:

```js
import styled from '@modern-js/runtime/styled'

const RedDiv = styled.div`
  color: red;
`
```

When you need to dynamically set the component style according to the `props` of the component, for example, when the attribute `primary` of `props` is `true`, the color of the button is white, and otherwise it is red. The implementation code is as follows:

```js
import styled from '@modern-js/runtime/styled'

const Button = styled.button`
  color: ${props => props.primary ? "white" : "red"};
  font-size: 1em;
`
```

For more usage of styled-components, please refer to [[styled-components official website](https://styled-components.com/) ].

:::info Additional
Modern.js uses the Babel plugin [babel-plugin-styled-components](https://github.com/styled-components/babel-plugin-styled-components) internally, and the plugin can be configured through [`tools.styled Components`](/docs/configure/app/tools/styled-components).
:::

:::tip
If you need to use [styled-jsx](https://www.npmjs.com/package/styled-jsx), [Emotion](https://emotion.sh/) and other CSS-in-JS libraries, you need to install the dependency of the corresponding library first. For specific usage, please refer to the official website of the corresponding library.
:::
