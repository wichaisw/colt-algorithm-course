// val - piece of data
// next - refernece to next node

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// let first = new Node('Hi');
// first.next = new Node('there');
// first.next.next = new Node('how')
// first.next.next.next = new Node('are')
// first.next.next.next.next = new Node('you')

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(val) {
    const newNode = new Node(val);

    // first element case
    if(!this.head) {
      this.head = newNode;
      this.tail = this.head;  
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    
    // increment length
    this.length++;

    return this;
  }
}

let list = new SinglyLinkedList();

list.push('hello')
list.push('there')
list.push('goodbye')
list.push(1)
console.log(list.push(2))

