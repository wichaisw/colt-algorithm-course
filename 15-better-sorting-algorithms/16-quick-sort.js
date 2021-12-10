// ANCHOR Pivot Helper Function
// first attempt at pivot
function myPivot(arr) {
  let pivot = 0;
  let leftElements = 0;

  for(let i = 0; i < arr.length; i++) {

    if(arr[i] < arr[pivot]) {
      leftElements++;
      let temp = arr[i];
      arr[i] = arr[pivot + leftElements];
      arr[pivot + leftElements] = temp;
    }

    if(i === arr.length - 1) {
      let tempPivotValue = arr[pivot];
      arr[pivot] = arr[pivot + leftElements]
      arr[pivot + leftElements] = tempPivotValue;

      return leftElements + 1;
    }
  }
}

// console.log(myPivot([5,2,1,8,4,7,6,3]));

function myPivot2(arr) {
  let pivot = 0;
  let initialPivot = pivot;

  for(let i = 0; i < arr.length; i++) {
    if(arr[i] < arr[initialPivot]) {
      pivot++;

      let temp = arr[i];
      arr[i] = arr[pivot];
      arr[pivot] = temp;
    }
  }

  let temp = arr[pivot];
  arr[pivot] = arr[initialPivot];
  arr[initialPivot] = temp;

  console.log(arr)

  return pivot;
}
let arr = [5,2,1,8,4,7,6,3];

// console.log(myPivot2(arr, 0, arr.length - 1));

// Colt's pivot

function pivot(arr, start=0, end=arr.length-1) {
  function swap(array, i, j) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  
  let pivot = arr[start];
  let swapIdx = start;

  for(let i = start + 1; i <= end; i++) {
    if(pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }

  }

  swap(arr, start, swapIdx);
  return swapIdx;
}

// console.log(pivot([4,8,2,1,5,7,6,3]))

// ANCHOR Qucik Sort 
// first attempt
function quickSort(arr, left = 0, right = arr.length-1) {
  // if(right - left < 2) return arr;

  if(left < right) {
    let pivotIndex = pivot(arr, left, right);
    //left    
    quickSort(arr, left, pivotIndex - 1);
  
    //right
    quickSort(arr, pivotIndex + 1, right);
  }

  return arr;
}

// console.log(quickSort([100,-3,4,8,2,1,5,7,6,3,2,3]));
console.log(quickSort([4,6,9,1,2,5]));