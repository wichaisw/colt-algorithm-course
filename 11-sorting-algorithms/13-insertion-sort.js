// first try
const myInsertionSort = (arr) => {
  for(let i = 1; i <= arr.length; i++) {
    let current = arr[i];
    for(let j = i; j > 0; j--) {
      console.log(`i arr[${i}]`, arr[i])
      console.log(`j arr[${j}]`, arr[j])
      if(arr[j-1] > arr[j]) {
        [arr[j], arr[j-1]] = [arr[j-1],arr[j]];
        // arr[j] = arr[j-1];
      } else if(arr[j] <= arr) {
        arr[j] = current;
      }
    }

    console.log(arr)
    console.log("=================================", i)
  }

  return arr;
}
// invalid approach, insertion sort must store value and insert j value in the right place
// not swapping them back, this seems like reverse bubble sort


function insertionSort(arr) {
  
  for(let i = 1; i < arr.length ; i++) {
    let currentVal = arr[i];
    let j;
    for(j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j+1] = arr[j];
    }
    arr[j+1] = currentVal;
  }
  
  return arr;
}

console.log(insertionSort([100,44,37,44,89,2,9]));
// console.log(insertionSort([1,2,9,76,4]));
