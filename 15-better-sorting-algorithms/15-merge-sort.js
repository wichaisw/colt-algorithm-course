// my frist attempts
function myMerge(arr1, arr2) {
  let sortedArray = [];
  let i = 0;
  let j = 0;

  while(i < arr1.length || j < arr2.length) {
    if(arr1[i] <= arr2[j] || j >= arr2.length) {
      sortedArray.push(arr1[i]);
      i++;
    } else {
      sortedArray.push(arr2[j]);
      j++;
    }

    console.log(i)
    console.log(j)
    console.log(sortedArray)
  }

  return sortedArray;
}


function merge(arr1, arr2) {
  let results = [];
  let i = 0;
  let j = 0;
  while(i < arr1.length && j < arr2.length) {
    if(arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    } 
  }

  while(i < arr1.length) {
    results.push(arr1[i]);
    i++;
  } 
  while(j < arr2.length) {
    results.push(arr2[j]);
    j++;
  } 


  return results;
}

// my frist attempts
const myMergeSort = (arr) => {
  let whole = [];
  
  function split(arr) {
    if(arr.length <= 1) {
      return whole;
    }
    let arr1 = [];
    let arr2 = [];
    let middle = Math.floor(arr.length / 2);
    arr1 = arr.slice(0, middle);
    arr2 = arr.slice(middle + 1, arr.length);    
    whole.push(arr1, arr2);
    split(arr1);
  }

  split(arr);

  // if(arr1.length <= 1 && arr2.length <= 1) {

  // }


}

console.log(merge([5, 12, 22, 23, 34, 67, 90, 109],  [-65, -4, -1, 1, 3, 6, 20, 34, 34, 55, 78, 90]))