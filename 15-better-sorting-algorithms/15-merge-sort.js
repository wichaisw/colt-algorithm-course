// ANCHOR Merge Helper
// my frist attempts at Merge Helper
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
// let result = merge([1,10,50], [2,14,99,100]);
// console.log(result)
// console.log(result.length)


// ANCHOR Merge Sort
// merge sort first attempt
function myMergeSort(arr) {
  if(arr.length <= 1) return arr;

  // recurively split the array in half until there is only 0-1 members in an array
  let middle = Math.round(arr.length / 2);
  let arr1 = arr.slice(0, middle);
  let arr2 = arr.slice(middle);

  // with smaller sorted arrays, merge them back up the tree
  return merge(myMergeSort(arr1), myMergeSort(arr2));
}

// Colt's merge sort
function mergeSort(arr) {
  if(arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  console.log('merge', `[${left}] , [${right}]`)

  return merge(left, right);
}

// console.log(mergeSort([10,24,76,73,72,1,9]));
console.log(mergeSort([45,-1,4,56,100,-56,5,0,2]));