# 1
More significantly you can even use it when mapping types. 

```js
const foo: Foo = { a: 1, b: 2 };
foo.a = 345; // Allowed

const bar: Readonly<Foo> = { a: 1, b: 2 };
bar.a = 456; // ERROR
```
* Actually this type is built in so you don't need to write it (delete and go to type definition).
