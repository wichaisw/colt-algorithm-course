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
}

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(11);
tree.insert(2);
tree.insert(16);
tree.insert(7);

console.log(tree.find(5))