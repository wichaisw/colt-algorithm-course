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
  let counter = 0;
  // outer loop loops from the back, cuz we'll be already know those last elements behind i is already sorted
  // this way, we'll have fewer loop each round since we don't loop through sorted elements
  for(let i = arr.length - 1; i > 0; i--) {
    counter++
    // isSwap = false;
    console.log(`i arr[${i}]`, arr[i])
    for(let j = 0; j < i; j++) {
      console.log(arr)
      console.log(`j arr[${j}]`, arr[j])
      if(arr[j] > arr[j + 1]) {
        // let temp = arr[j];
        // arr[j] = arr[j+1];
        // arr[j+1] = temp;

        [arr[j], arr[j+1]] = [arr[j+1],arr[j]]
        // isSwap = true;
      }
    }
    console.log("===========================", counter)
    // if(!isSwap) break;
  }


  return arr;
}


console.log(bubbleSort([100,44,37,44,89,2,9]));

