```js
const foo = {
  a: 123,
  b: 456,
};

const bar = {
  c: 789
};
```
* A simple extend
```js
const baz = { ...foo, ...bar };
```
* A simple subtraction when you are composing function.
You can easily remove data when composing higher order functions.
```js
const { a, ...qux } = baz;
```
