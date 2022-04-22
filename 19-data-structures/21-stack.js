class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    const newNode = new Node(val);

    if(!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      // treat singly linked list head as last to achieve O(1) pop and push
      let temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }

    return ++this.size;
  }

  pop() {
    if(!this.first) return null;
    let temp = this.first;

    if(this.first === this.last) {
      this.last = null;
    }
    
    this.first = temp.next;
    this.size--;
    return temp.value;

  }
}

const test = new Stack();
console.log(test.push(1))
console.log(test.push(2))
console.log(test.push(3))
console.log(test.pop())
console.log(test.pop())
console.log(test.pop())
console.log(test.pop())