export class Stack {
  private wmkey = {};
  private items = new WeakMap();

  constructor() {
    this.items.set(this.wmkey, []);
  }

  push(element) {
    let statck = this.items.get(this.wmkey);
    stack.push(element);
  }

  pop() {
    let stack = this.items.get(this.wmkey);
    return stack.pop();
  }

  peek() {
    let stack = this.items.get(this.wmkey);
    return stack[stack.length - 1];
  }

  clear() {
    this.items.set(this.wmkey, []);
  }

  size() {
    return this.items.get(this.wmkey).length;
  }
}
