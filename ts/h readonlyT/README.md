# 1
More significantly you can even use it when mapping types. 

```js
const foo: Foo = { a: 1, b: 2 };
foo.a = 345; // Allowed

const bar: Readonly<Foo> = { a: 1, b: 2 };
bar.a = 456; // ERROR
```
* Actually this type is built in so you don't need to write it.

# 2
React Type definitions do this for you automatically using the built in `Readonly<T>` for state. 

Plenty of improvments in React's handling. E.g. this `Readonly` fact is just something that someone did without beating a drum about it and we all got it for free.

# NEXT
Segue into children type checking for React.
