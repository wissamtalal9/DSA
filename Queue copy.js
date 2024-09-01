class queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }
  dequeue() {
    return this.items.shift();
  }

  Isempty() {
    return this.items.length === 0;
  }
  peek() {
    if (!this.empty) {
      return this.items[0];
    }
    return null;
  }
  size() {
    return this.items.length;
  }
  print() {
    console.log(this.items.toString());
  }
}
const Queue = new queue();
console.log(Queue.Isempty());

Queue.enqueue(10);
Queue.enqueue(20);
Queue.enqueue(30);
Queue.enqueue(40);

console.log(Queue.size());
console.log(Queue.peek());
Queue.print();

console.log(Queue.dequeue());
Queue.print();
console.log(Queue.peek());
