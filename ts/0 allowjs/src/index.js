export const log = () => {
  console.log('hello world')
}

let bar = 123;
// @ts-ignore
external(bar);
// @ts-ignore
bar.trim();