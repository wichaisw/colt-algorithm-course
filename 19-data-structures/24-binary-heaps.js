class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(element) {
    this.values.push(element);
    this.bubbleUp();
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];

    while(idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];

      if(element < parent) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }

//   insert(value) {
//     this.values.push(value);
//     let currentIndex = this.values.length - 1;
//     let parentIndex = Math.floor((currentIndex - 1) / 2);
    
//     while(this.values[parentIndex] < value) {
//       let temp = this.values[parentIndex];
//       this.values[parentIndex] = value;
//       this.values[currentIndex] = temp;
//       currentIndex = parentIndex;
//       parentIndex = Math.floor((currentIndex - 1) / 2);
//     }

//     return this.values;
//   }

  extractMax() {
    const max = this.values[0];
    const end = this.values.pop();
    if(this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return max;
  }

  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];

    while(true) {
      let leftChildIdx = (2 * idx) + 1;
      let rightChildIdx = (2 * idx) + 2;
      let leftChild, rightChild;
      let swap = null;

      if(leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if(leftChild > element) {
          swap = leftChildIdx;
        }
      }

      if(rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if(
          (swap === null && rightChild > element) || 
          (swap !== null && rightChild > leftChild)
        ) {
          swap = rightChildIdx;
        }
      }

      if(swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }

  // extractMax() {
  //   const root = this.values[0];
  //   const lastIdx = this.values.length - 1;
  //   if(lastIdx < 0) return undefined;

  //   this.values[0] = this.values.pop();
  //   let parentIdx = 0;
    
  //   while(true) {
  //     let leftIdx = (parentIdx * 2) + 1;
  //     let rightIdx = (parentIdx * 2) + 2;

  //     if(leftIdx > lastIdx || rightIdx > lastIdx) break;
  //     let parent = this.values[parentIdx];
  //     let left = this.values[leftIdx];
  //     let right = this.values[rightIdx];
  //     let temp = parent;

  //     if((right > parent) && (right > left)) {
  //       this.values[parentIdx] = this.values[rightIdx];
  //       this.values[rightIdx] = temp;
  //       parentIdx = rightIdx;
  //     } else if(left > parent) {
  //       this.values[parentIdx] = this.values[leftIdx];
  //       this.values[leftIdx] = temp;
  //       parentIdx = leftIdx;
  //     }
  //   }
  
  //   return root;
  // }
}

let maxHeap = new MaxBinaryHeap();

// maxHeap.insert(41)
// maxHeap.insert(39)
// maxHeap.insert(33)
// maxHeap.insert(18)
// maxHeap.insert(27)
// maxHeap.insert(12)
// console.log(maxHeap.values)
// console.log(maxHeap.extractMax());
// console.log(maxHeap.values)


maxHeap.insert(15);
maxHeap.insert(87);
maxHeap.insert(98);
maxHeap.insert(74);
maxHeap.insert(0);
maxHeap.insert(-8);

console.log(maxHeap.values)
console.log(maxHeap.extractMax());
console.log(maxHeap.values)