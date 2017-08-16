You can ofcourse move stuff around in the variable space
```js
const bar = foo;
```

Or the type space 
```js
type Bar = Foo;
```

But you can't do stuff like 

```js
type Bar = foo;
const bar = Foo;
```