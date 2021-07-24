// naive way, also compare value that is already compared
function naiveBubbleSort(arr) {
  for(let i = 0; i < arr.length; i++) {

    for(let j = 0; j< arr.length; j++) {
      if(arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }

  return arr;
}

// optimized
function bubbleSort(arr) {
  let isSwap = false;
  // outer loop loops from the back, cuz we'll be already know what's behind i is already sorte4d
  for(let i = arr.length; i > 0; i--) {
    isSwap = false;
    for(let j = 0; j < (i - 1); j++) {
      console.log(arr)
      console.log(arr[j], arr[i-1])
      if(arr[j] > arr[j + 1]) {
        // let temp = arr[j];
        // arr[j] = arr[j+1];
        // arr[j+1] = temp;

        [arr[j], arr[j+1]] = [arr[j+1],arr[j]]
        isSwap = true;
      }
    }
    console.log("===========================")
    if(!isSwap) break;
  }


  return arr;
}


console.log(bubbleSort([100,44,37,44,89,2,9]));