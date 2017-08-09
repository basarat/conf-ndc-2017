class Stack<T> {
  private data: T[] = [];
  push(item: T) { this.data.push(item); }
  pop(): T | undefined { return this.data.pop(); }
}

const numbers = new Stack<number>();
numbers.push(1);
const x = numbers.pop();

// numbers.push("2"); // Error