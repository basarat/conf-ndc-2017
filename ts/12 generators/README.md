#1 

Lazy iteration. C# devs must be used to it as `yeild` and returning `IEnumerable`. 

```js
function* whole() {
  let i = 0;
  while (true) {
    yield i++;
  }
}

for (const item of whole()) {
  if (item > 100) break;
  console.log(item);
}
```

#2
