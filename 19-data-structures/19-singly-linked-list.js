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

  // traverse() {
  //   let current = this.head;
  //   while(current) {
  //     console.log('val: ', current.val)
  //     current = current.next;
  //   }
  // }

  push(val) {
    const newNode = new Node(val);

    // first node case
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

  pop() {
    // if have no node
    if(!this.head) return undefined;

    let currentNode = this.head;
    let newTail = currentNode;
    while(currentNode.next) {
      newTail = currentNode;
      currentNode = currentNode.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    if(this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return currentNode;
  }
  
  shift() {
    if(!this.head) return undefined;
    
    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;

    if(this.length === 0) {
      this.tail = null;
    }

    return currentHead;
  }

  unshift(val) {
    const newNode = new Node(val);

    if(!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    
    this.length++;

    return this;
  }

  get(index) {
    if(index < 0 || index >= this.length) return null;

    let counter = 0;
    let current = this.head;

    while(counter !== index) {
      current = current.next;
      counter++;
    }

    return current;
  }

  set(index, val) {
    let foundNode = this.get(index);

    if(foundNode) {
      foundNode.val = val;
      return true;
    }

    return false;
  }

  insert(index, val) {
    if(index < 0 || index > this.length) return false;
    if(index === this.length) return !!this.push(val);
    if(index === 0) return !!this.unshift(val)
    
    let newNode = new Node(val);
    let prevNode = this.get(index - 1);

    newNode.next = prevNode.next;
    prevNode.next = newNode;
    
    this.length++;

    return true;
  }

  remove(index) {
    if(index < 0 || index >= this.length) return undefined;
    if(index === 0) return this.shift();
    if(index === this.length - 1) return this.pop();

    let prevNode = this.get(index - 1);
    let removedNode = prevNode.next;
    prevNode.next = removedNode.next;
    this.length--;

    return removedNode;
  }

  reverse() {
    let current = this.head;
    this.head = this.tail;
    this.tail = current;
    let next;
    let prev = null; // next of tail should be null
    
    for(let i = 0; i < this.length; i++) {
      next = current.next; // hold current next
      current.next = prev; // point current.ndext to value from previous loop
      prev = current; // store prev for next round
      current = next; // move to next node
    }

    return this;
  }

  print() {
    let arr = [];
    let current = this.head;
    while(current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr)
  }
}

let list = new SinglyLinkedList();

list.push(1)
list.push(2)
list.push(3)
list.push(4)

list.unshift('test')

// console.log(list.get(1))
// console.log(list.set(1, "second"))
// console.log(list.get(1))

// list.insert(2,'new second')
// list.insert(2,'new second2')
// list.traverse();
// console.log('----------------------')
// list.remove(2)
list.print();
list.reverse();
list.print();
