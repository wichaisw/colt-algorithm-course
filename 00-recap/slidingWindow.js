//first try

const maxSubArraySum = (arr, n) => {
  if(n > arr.length) {
    return null;
  }

  let maxSum = -Infinity;
  let sum = 0;
  let i = 0;

  for(let j = 0; j < n; j++) {
    sum += arr[i + j];

    if(sum > maxSum) {
      maxSum = sum;
    }

    if((j + 1) === n) {
      i++;
      j = -1;
      sum = 0;
    }

    if(i > arr.length - 1) {
      break;
    }
  }

  return maxSum
}

const maxSubArraySolution = (arr, num) => {
  let maxSum = 0;
  let tempSum = 0;
  
  if(arr.length < num) return null;

  for(let i = 0; i < num; i ++) {
    maxSum += arr[i];
  }

  tempSum = maxSum;
  
  for(let i = num; i < arr.length; i++) {

    // replace first in member with lastest member
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
}



let test1 = [1,2,5,2,8,1,5];
let test2 = [4,2,1,6];

let maxSubArray = maxSubArraySolution
(test2, 4);

console.log(maxSubArray)