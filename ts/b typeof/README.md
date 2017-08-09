* Say you have two objects, you are too lazy to create an explicit type annotation (or you are just migrating a massive code base).
* You can capture the type using `typeof` e.g.

```js
const personA = {
  firstName: "Hello",
  lastName: "World"
}

const personB:typeof personA = {
  firstName: "Foo",
  lastName: "Boo",
}
```

And even create a type from it e.g. 

```js
const personA = {
  firstName: "Hello",
  lastName: "World"
}

type Person = typeof personA;

const personB: Person = {
  firstName: "Foo",
  lastName: "Boo",
}
```
