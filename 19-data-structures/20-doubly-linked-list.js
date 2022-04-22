// Node (val, next, prev)
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}


// DoublyLinkedList (head, tail, length)
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    
    if(!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length++;

    return this;
  }

  pop() {
    if(!this.head) return undefined;
    const poppedNode = this.tail;

    if(this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      // sever the tie from the poppedNode
      poppedNode.prev = null;
    }

    this.length--;

    return poppedNode;
  }

  shift() {
    if(!this.head) return undefined;
    const shiftedNode = this.head;

    if(this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = shiftedNode.next;
      this.head.prev = null;
      shiftedNode.next = null;
    }

    this.length--;

    return shiftedNode;
  }

  unshift(val) {
    const newNode = new Node(val);
    if(!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;

    return this;

    // const oldHead = this.head;
    // this.head = new Node(val);
    // this.head.next = oldHead;
    // this.length++;
    // if(this.length === 1) {
    //   this.tail = this.head;
    // } else {
    //   oldHead.prev = this.head;
    // }
    // return val;
  }

  get(index){
    if(index < 0 || index >= this.length) return null;

    let counter, current;
    
    if(index <= this.length / 2) {
      counter = 0;
      current = this.head;
      while(counter !== index) {
        current = current.next;
        counter++;
      }
    } else {
      counter = this.length - 1;
      current = this.tail;
      while(counter !== index) {
        current = current.prev;
        counter--;
      }
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
    // convert result to boolean
    if(index === 0) return !!this.unshift(val);
    if(index === this.length) return !!this.push(val);

    const newNode = new Node(val);
    let beforeNode = this.get(index - 1);
    let afterNode = beforeNode.next;

    beforeNode.next = newNode, newNode.prev = beforeNode;
    newNode.next = afterNode, afterNode.prev = newNode;
    this.length++;

    return true;
  }

  remove(index) {
    if(index < 0 || index >= this.length) return false;
    if(index === 0) return !!this.shift();
    if(index === this.length - 1) return !!this.pop();

    const targetNode = this.get(index);
    targetNode.prev.next = targetNode.next;
    targetNode.next.prev = targetNode.prev;
    targetNode.next = null, targetNode.prev = null;
    this.length--;

    return targetNode;
  }
}

const test = new DoublyLinkedList();

test.unshift(2);
test.unshift(1);

console.log(test.get(0))