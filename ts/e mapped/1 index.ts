interface NameMap {
  [name: string]: string;
}

const foo: NameMap = Object.create(null);
foo["hello"] = "world";
const bar = foo["hello"]; // bar: string;
