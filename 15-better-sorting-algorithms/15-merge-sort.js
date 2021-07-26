// my first try
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

console.log(merge([5, 12, 22, 23, 34, 67, 90, 109],  [-65, -4, -1, 1, 3, 6, 20, 34, 34, 55, 78, 90]))