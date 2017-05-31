interface Square {
  kind: "square";
  size: number;
}
interface Rectangle {
  kind: "rectangle";
  width: number;
  height: number;
}
type Shape = Square | Rectangle;

function area(s: Shape) {
  if (s.kind === "square") {
    // Now TypeScript *knows* that `s` must a square ;)
    // So you can use its members safely :)
    return s.size * s.size;
  }
  else {
    // Wasn't a square? So TypeScript will figure out that it must be a Rectangle ;)
    // So you can use its members safely :)
    return s.width * s.height;
  }
}

/** Module */
export { area };