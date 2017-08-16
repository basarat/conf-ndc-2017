# 1 
* TypeScript has had indexers which can strings or numbers for a long time.
* You can use an object as a dictionary quite easily using an index signature. 
```js
foo["hello"] = "world";
const bar = foo["hello"]; // bar: string;
```

# 2
* The `in` operator within an indexer lets you iterate a union of types. Its like a list comprehension in python, but for Types. 

```js
const foo: MemberKeyed = {
  // Show auto complete  
}
``` 

* These are called mapped types because we just created a new type by mapping over an existing type.

# 3
* These can be used with Generics, Example use cases are fairly diverse and really up to your imagination, but one good one is creating something like a string enum.

```js
const Direction = strEnum([
  'North',
  'South',
  'East',
  'West'
]);

console.log(Direction.North)
console.log(Direction.South)
```