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

Makes certian pattern super easy to write e.g. a linked list

```js
  *values() {
    let current = this.head;
    while (current) {
      yield current.value;
      current = current.next;
    }
  }
```

```js
for (const item of list.values()) {
  console.log(item);
}

// OR 
console.log(Array.from(list.values()))
```