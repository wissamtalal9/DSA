const linkedList = require("./linked-list");

class linkedListStack {
  constructor() {
    this.list = new linkedList();
  }

  push(value) {
    this.list.prepend(value);
  }
  pop() {
    return this.list.removeFromFront();
  }
  peek() {
    return this.list.head.value;
  }
  isEmpty() {
    return this.list.isEmpty();
  }
  getSize() {
    this.list.gotSize();
  }

  print() {
    this.list.print();
  }
}

const stack = new linkedListStack();
console.log(list.isEmpty);

stack.push(10);
console.log(stack.getSize());
