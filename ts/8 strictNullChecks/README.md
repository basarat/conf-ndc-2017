Assumes no one is going to do something crazy like
```js
addDays(null, null);
```
* Use option strict null checks
One of those cases where offloading this burden to the compiler is actually more performant as you don't have these weird checks all over your code base.
