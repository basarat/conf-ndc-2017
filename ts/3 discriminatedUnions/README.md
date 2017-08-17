```js
  if (s.kind === 'square') {
    // Now TypeScript *knows* that `s` must a square ;)
    // So you can use its members safely :)
    return s.size * s.size;
  }
  else {
    // Wasn't a square? So TypeScript will figure out that it must be a Rectangle ;)
    // So you can use its members safely :)
    return s.width * s.height;
  }
```

# Exhaustive checks
```js
  else if (s.kind === 'rectangle') {
    return s.width * s.height;
  }
  else {
    const _exhaustive: never = s;
  }
```

# New type 

```js
interface Circle {
  kind: 'circle';
  radius: number;
}
type Shape = Square | Rectangle | Circle;
```

```js
  else if (s.kind === 'rectangle') {
    return s.width * s.height;
  }
  else if (s.kind === 'circle') {
    return Math.PI * s.radius * s.radius;
  }
  else {
    const _exhaustive: never = s;
  }
```

* e.g. a new redux action.