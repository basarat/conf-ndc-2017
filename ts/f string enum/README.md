TypeScript now has proper string enums as well so you don't need to use such a function.
```js
let direction: Direction = Direction.North;
direction = Direction.South;
console.log(direction); 
```
