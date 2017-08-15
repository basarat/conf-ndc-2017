const log = () => {
  console.log('hello world')
}

let foo = { bar: 123 };
external(foo);
foo.bar.trim();