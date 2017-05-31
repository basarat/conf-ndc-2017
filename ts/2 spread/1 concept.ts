const foo = {
  a: 123,
  b: 456,
}

const bar = {
  c: 789
}

const baz = { ...foo, ...bar }

const { a, ...qux } = baz;
