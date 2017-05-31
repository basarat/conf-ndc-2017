
```js
const foo = {
  a: 123,
  b: 456,
}

const bar = {
  c: 789
}

const baz = { ...foo, ...bar }

const { a, ...qux } = baz;
```
* A simple extend
* A simple subtraction when you are composing function.
You can easily remove data when composing higher order functions.
