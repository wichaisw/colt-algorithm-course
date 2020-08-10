// รับ 2 parameters คือ array ของ positive integers กับ a positive integer
// หา length ที่สั้นที่สุดของ subarray ที่อยู่ติดกันและบวกกันแล้วได้ผลรวมมากกว่าหรือเท่ากับ integer ใน parameter ที่ 2
// ถ้าไม่มีให้ return 0

function minSubArrayLen(arr, num) {
  // สร้าง ผลรวมขึ้น เป็น 0 เพราะค่าที่รับเป็น possitive
  let sum = 0
  let minLength = 0;
  // วนจนกว่า ผลรวมจะมากกว่า num แล้วเคลื่อน
  let i = 0;
  for (let j = 0; j < arr.length; j++) {
    if (arr[i] > num) return 1;
    if (sum === 0) {
      sum = arr[i]
    } else {
      sum = sum + arr[j]
    }

    if (sum >= num) {
      if (minLength === 0) {
        minLength = j;
      }
      if ((j - i) + 1 < minLength) {
        minLength = (j - i) + 1;
      }
      min = sum;
      sum = 0;
      j = i;
      i++;
    }
  }

  return minLength;
}

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7))

// Colt's solution

function minSubArrayLen(nums, sum) {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;

  while (start < nums.length) {
    // if current window doesn't add up to the given sum then 
    // move the window to right
    if (total < sum && end < nums.length) {
      total += nums[end];
      end++;
    }
    // if current window adds up to at least the sum given then
    // we can shrink the window 
    else if (total >= sum) {
      minLen = Math.min(minLen, end - start);
      total -= nums[start];
      start++;
    }
    // current total less than required total but we reach the end, need this or else we'll be in an infinite loop 
    else {
      break;
    }
  }

  return minLen === Infinity ? 0 : minLen;
}