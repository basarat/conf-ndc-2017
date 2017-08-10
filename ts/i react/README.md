# 1
React Type definitions use `Readonly` automatically using the built in `Readonly<T>` for state. 

Plenty of improvments in React's handling. E.g. this `Readonly` fact is just something that someone did without beating a drum about it and we all got it for free.

* Here we have a simple react component. The bigger will quite commonly do something like: 

```js
this.state.count++;
this.forceUpdate();
```
* Fortunately with TypeScript you get a nice error in this case
* And you can do the correct thing 

```js
this.setState({ count: this.state.count + 1 });
```

# NEXT
Segue into children type checking for React.
