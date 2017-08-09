# 1

* You can get the name of the keys of a type as a union using `keyof`
* Why would this be useful. This is great when combined with Generics. 
* A lot of stuff common in functional programming cannot be modeled without this.

# 2 
Lookup a prop is a common one.

```
const foo = {
  bar: 123,
  baz: 456
};

const bar = prop(foo, 'bar'); // Okay
const baz = prop(foo, 'invalid'); // Error
```