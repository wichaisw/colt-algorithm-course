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

// console.log(maxSubArray)

//findLongestSubString with distinct characters
const findLongestSubString = (str) => {
  if(str.length === 0) {
    return null;
  }

  let seen = {};
  let start = 0;
  let longest = 0;

  for(let i = 0; i < str.length;  i++) {
    char = str[i];

    // if already seen, change start point
    if(seen[char]) {
      start = Math.max(start, seen[char]);
    }

    longest = Math.max(longest, i - start + 1);
    seen[char] = i + 1;
  }
}

// const minSubArrayLen = (arr, num) => {
//   let start = 0;
//   let end = 0;
//   let sum = 0;
//   let minLength = Infinity;

//   sum = arr[start];
//   if(sum >= num) {
//     minLength = 1;
//   }
//   let isSkip = false;

//   while(end < arr.length) {
//     if(arr[start] >= num || arr[end] >= num) {
//       minLength = 1;
//     }

//     if(start === end) {
//       end++;
//       continue;
//     }

//     console.log("start", start)
//     console.log("end: ", end)
//     if(isSkip) {
//       isSkip = false;
//     } else {
    
//       sum += arr[end];
//     }

//     console.log("sum: ", sum)
    
//     if(sum >= num) {      
//       if((end - start + 1 ) < minLength) {
//         console.log(minLength)
//         minLength = end - start + 1;
//         console.log(minLength)

//       }
      
//       sum -= arr[start]
//       start++;
//       isSkip = true;

//     } else {
//       end++;
//     }
    
//     console.log("----------")
//   }


//   return minLength === Infinity ? 0 : minLength;
// }

// refactor
const minSubArrayLen = (arr, num) => {
  let start = 0;
  let end = 0;
  let sum = 0;
  let minLength = Infinity;

  while(start < arr.length) {
    if(arr[start] >= num || arr[end] >= num) {
      minLength = 1;
    }

    console.log("start", start)

    console.log("sum: ", sum)
    
    if(sum >= num) {      
      minLength = Math.min(minLength, (end - start))
      
      sum -= arr[start]
      start++;

    } else if(end < arr.length) {
      sum += arr[end];
      end++;
    } else {
      break;
    }
    
    console.log("----------")
  }


  return minLength === Infinity ? 0 : minLength;
}

const minSubArrayLenRes = minSubArrayLen([2,3,1,2,4,3], 7);

console.log(minSubArrayLenRes)