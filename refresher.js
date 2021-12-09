function validAnagram(str1, str2) {
  if(str1.length !== str2.length) return false;

  let str1Counter = {};
  for(let cha of str1) {
    str1Counter[cha] = str1Counter[cha] ? str1Counter[cha] + 1 : 1;
  }

  for(let cha of str2) {
    if(!str1Counter[cha]) return false;

    str1Counter[cha] = str1Counter[cha] - 1;
  }

  for(let count in str1Counter) {
    if(str1Counter[count] !== 0) {
      return false;
    }
  }

  return true;

}


function countUniqueValues(numArr) {
  if(numArr.length === 0) return 0;

  let left = 0; // counter
  let right = 1; // mover

  while(right < numArr.length) {
    if(numArr[right] > numArr[left]) {
      left += 1;
      numArr[left] = numArr[right];

    }
    
    right += 1;

  }
  
  return left + 1;
}

function maxSubArraySum(arr, num) {
  if(num > arr.length) throw new Error('Sub array length exceeds the array length');

  let max = -Infinity;
  let subArrSum = 0;

  for(let i = 0; i < num; i++) {
    subArrSum += arr[i];
  }

  for(let i = num; i < arr.length; i++) {
    if(num + i > arr.length - 1) return max;

    console.log(subArrSum + " - " + arr[i] + " + " + arr[i + num])  
    subArrSum = subArrSum - arr[i - num] + arr[num];

    max = Math.max(max, subArrSum);
  }


  return max;
}

// console.log(maxSubArraySum([2,6,9,2,1,8,5,6,3], 3))
// console.log(maxSubArraySum([1,2,5,2,8,1,5],4))
// console.log(maxSubArraySum([1,2,5,2,8,1,5],2))

function binarySearch(arr, num) {
  let left = 0;
  let right = arr.length - 1;
  let middle;

  // loop until each pointer intercept
  while(left <= right) {
    middle = Math.round((left + right) / 2);
    if(arr[middle] === num) return middle;

    // check if the middle value is lesser or higher than the target value
    if(num < arr[middle]) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }

  return -1;
}

console.log(binarySearch([-65, -4, -1, 1, 3, 6, 20, 34, 34, 55, 78, 90], 34))
