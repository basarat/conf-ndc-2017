# 1 
Readonly is a concept that exists in JavaScript naturally given that we can have getters without a setter.

```js
const foo = new Foo();
const bar = foo.bar;
foo.bar = 456; // Error 
```
# 2
TODO:

Explicit annotation `readonly` 
# 3 
More siginficantly you can even use it when mapping types. 
React Type definitions do this for you automatically using the built in `Readonly<T>` for state. 
# 4 
Plenty of improvments in React's handling. E.g. this `Readonly` fact is just something that someone did without beating a drum about it and we all got it for free.

Segue into children type checking for React.
