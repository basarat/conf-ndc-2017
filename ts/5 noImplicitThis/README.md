* `this` is arguably the most misunderstood feature of JavaScript. 
* The main reason is that it gets unbound too easily. People assume is driven by how the function is written and not how it is called.

```js
function inc() {
  this.count++;
}

const foo = {
  count: 0,
  inc: inc,
};

console.log(foo.count);
foo.inc();
console.log(foo.count);
```

This is just JavaScript.

* However if you give the function to someone else to call it: 

```js
console.log(foo.count);
const fooInc = foo.inc;
fooInc();
console.log(foo.count);
```

So we have `noImplicitThis` option.

Now we get an error when `this` is not annotated, and as soon as we annotate it, 

```js
function inc(this: typeof foo) {
```
The invalid useage `fooInc` turns into an error.
