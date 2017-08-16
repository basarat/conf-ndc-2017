You can annotate a string since forever
```js
let str: string;

str = "hello";
str = "world";
```

But now you can even annotate a subset of strings as a literal.
```js
let str: "hello";

str = "hello"; // Okay
str = "world"; // Error
```