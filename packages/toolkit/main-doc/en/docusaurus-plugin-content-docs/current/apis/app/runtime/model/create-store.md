---
sidebar_position: 10
title: createStore
---

import ReduckTip from '@site-docs-en/components/reduck-tip.md'

<ReduckTip />


`createStore` is used to create a Store. Reduck’s Store based on Redux's [Store](https://redux.js.org/api/store) implementatio. Used to store the state of the application and managing the state and Model.

In general, this API is only used when you need to have full control over the creation of the Store. For example, to customize a Store, pass in the ['Provider'](./Provider.md) component to use.


## Function Signature

```ts
interface StoreConfig {
  initialState?: Record<string, any>;
  middlewares?: Middleware[];
  models?: Model[];
  plugins?: Plugin[];
  enhancers?: StoreEnhancer[];
}

interface ReduckStore extends ReduxStore {
  use: typeof useModel;
  unmount: (model: Model) => void;
}

function createStore(config?: StoreConfig): ReduckStore;
```

### Input

- `config`: store options.
  - `initialState`: set the initial state for store.
  - `models`: set the Model to mount to the Store in advance(No need for normal use).
  - `middlewares`: set Redux [middleware](https://redux.js.org/understanding/thinking-in-redux/glossary#middleware).
  - `enhancers`: set Redux [Store enhancer](https://redux.js.org/understanding/thinking-in-redux/glossary#store-enhancer).
  - `plugins`: set Reduck plugin。***experimental API, not recommended***。

### Return Value

Reduck Store:

- `use`: mount and fetch Model objects dynamically. Usage is the same as ['useModel'](./use-model.md), but can be used outside of React components.
- `unmount`: unmount the Model object, and the Model State is cleared from the Store.
- `ReduxStore`: [Redux Store API](https://redux.js.org/tutorials/fundamentals/part-4-store#redux-store).


## Example
```tsx
const store = createStore();

function load() {
  const [, actions] = store.use(fooModel);

  actions.load();
}
```
