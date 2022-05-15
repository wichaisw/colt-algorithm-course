class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    // iteratively
    if(!this.root) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while(true) {
        // don't allow duplication
        if(value === current.value) return undefined;

        // left branch
        if(value < current.value) {
          if(current.left === null) {
            current.left = newNode;
            return this;
          } else {
            // else isn't needed since if case return early
            // if current node is not null, check down the tree
            current = current.left;
          }
        } else if(value > current.value) {
          if(current.right === null) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }

  find(value) {
    if(!this.root) return false;
    let current = this.root;
    let found = false;

    while(current && !found) {
      if(value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    
    if(!found) return false;
    return current;

    // while(true) {
    //   if(value === current.value) return current;
  
    //   if(value > current.value) {
    //     if(current.right) {
    //       current = current.right;
    //     } else {
    //       return false;
    //     }
    //   } else {
    //     if(current.left) {
    //       current = current.left;
    //     } else {
    //       return false;
    //     }
    //   }
    // }
  }

  // ANCHOR Breadth First Search
  BFS() {
    // use array queue for simplicity purpose
    const data = [], queue = [];
    let node = this.root;

    queue.push(this.root);
    while(queue.length) {
      // FIFO
      node = queue.shift();
      data.push(node.value);
      if(node.left) queue.push(node.left);
      if(node.right) queue.push(node.right);
    }

    return data;
  }

  // ANCHOR Depth First Search: PreOrder
  DFSPreOrder() {
    const data = [];
    let current = this.root;
    
    // recursively calls helper
    function traverse(node) {
      data.push(node.value);
      if(node.left) traverse(node.left);
      if(node.right) traverse(node.right);
    }
    traverse(current);

    return data;
  }
  // DFSPreOrder(node = this.root) {
  //   if(node) {
  //     console.log(node.value);
  //     this.DFSPreOrder(node.left);
  //     this.DFSPreOrder(node.right);
  //   }
  // }
}

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);

console.log(tree.DFSPreOrder());