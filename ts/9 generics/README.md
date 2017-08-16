Allow you to specify constraints.
* What you push is what you get when you pop.
* You cannot push something that doesn't qualify for the type.
```js
const numbers = new Stack<number>();
numbers.push(1);
const x = numbers.pop(); // See type of x
numbers.push("2"); // Error
```

Generics are critical to safe data structure useage. Your alternative is inheritance where you specify all the types which is just needless work, which fortuately you can just just offload to the TypeScript compiler.