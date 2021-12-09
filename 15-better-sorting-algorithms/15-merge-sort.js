// my frist attempts
function myMerge(arr1, arr2) {
  if(arr1.length === 0) return arr2;
  if(arr2.length === 0) return arr1;

  let mergedArr = [];
  let i = 0;
  let j = 0;

  let minArr = [];
  let maxArr = []; 

  if(arr1[arr1.length - 1] > arr2[arr2.length - 1]) {
    maxArr = arr1;
    minArr = arr2;
  } else {
    maxArr = arr2;
    minArr = arr1;
  }
  
  while(i < minArr.length) {
    if(minArr[i] < maxArr[j]) {
      mergedArr.push(minArr[i]);
      i++;
    } else {
      mergedArr.push(maxArr[j]);
      j++;
    }    
  }

  while(j < maxArr.length) {
    mergedArr.push(maxArr[j]);
    j++;
  }

  return mergedArr;
}

// colt's merge

function merge(arr1, arr2) {
  let results = [];
  let i = 0;
  let j = 0;

  while(i < arr1.length && j < arr2.length) {
    if(arr1[i] < arr2[j]) {
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

// let result = myMerge([5, 12, 22, 23, 34, 67, 90, 109], [-65, -4, -1, 1, 3, 6, 20, 34, 34, 55, 78, 90]) 
let result = merge([1,10,50], [2,14,99,100]);
console.log(result)
console.log(result.length)
