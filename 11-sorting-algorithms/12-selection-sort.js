// first try

const mySelectionSort = (arr) => {
  let min;
  let minIndex;
  let j;
  let isLesser = false;

  for(let i = 0; i < arr.length; i++) {
    min = Infinity;
    j = i;
    isLesser = false;

    for(j; j < arr.length; j++) {

      if(arr[j] < min) {
        min = arr[j];
        minIndex = j;
        isLesser = true;
      }  
    }

    if(isLesser) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
    }
    
    console.log(arr)
    console.log("=====================================", i + 1)
  }


  return arr;
}

function selectionSort(arr) {
  for(let i = 0; i < arr.length; i++ ) {
    let lowest = i;
    for(let j = i + 1; j < arr.length; j++) {
      if(arr[j] < arr[lowest]) {
        lowest = j;
      }
    }

    if(i !== lowest) {
      let temp = arr[i];
      arr[i] = arr[lowest];
      arr[lowest] = temp;
    }
  }

  return arr;
}

console.log(selectionSort([100,44,37,44,89,2,9]));
