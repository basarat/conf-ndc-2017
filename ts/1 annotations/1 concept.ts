/** Primitives */
let num: number = 123;
let str: string = 'hello';
let bool: boolean = true;

/** Array */
let boolArray: boolean[] = [];

/** Native types */
let regex: RegExp = /hello/g;

/** Compose */
let obj: {
  foo: number;
  bar: string;
} = {
    foo: 123,
    bar: 'hello'
  };

/** Names types */
interface Obj2 {
  foo: number;
  bar: string;
}
let obj2: Obj2 = {
  foo: 123,
  bar: 'hello'
};
