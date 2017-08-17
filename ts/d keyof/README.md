# 1

* You can get the name of the keys of a type as a union using `keyof`

```js
type PersonKeys = keyof Person;
```


* Why would this be useful. This is great when combined with Generics. 
* A lot of stuff common in functional programming cannot be modeled without this.

# 2 
* Lookup a prop is a common one.
* Since the generics are in the argument position, they can actually be inferred. From the first argument, it knows that 'K' must be in the set of keys that make up `T`.
```js
const bar = prop({bar: 123,baz: 456}, 'bar'); // Okay
const baz = prop({bar: 123,baz: 456}, 'invalid'); // Error
```