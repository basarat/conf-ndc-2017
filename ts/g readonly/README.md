# 1 
Readonly is a concept that exists in JavaScript naturally given that we can have getters without a setter.

```js
const foo = new Foo();
const bar = foo.bar;
foo.bar = 456; // Error 
```
# 2
Explicit annotation `readonly`. You can modify in the constructor.

```js
const foo = new Foo();
const bar = foo.bar;
foo.bar = 456; // Error 
```

A lot of these things will come in handy allowing you to do *type driven refactoring*. You find a piece of code, and you put annotations on it to understand it better and check your assumptions.
