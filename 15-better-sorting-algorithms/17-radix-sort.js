let unsortedArr = [1556, 4, 3556, 593, 408, 4386, 902, 7, 8157, 86, 9637, 29];

// ANCHOR getDigit helper
// first attempt
const myGetDigit = (num, place) => {
  let strNum = num.toString();
  return Number(strNum[strNum.length - place - 1]);
}

// second attempt with math
function myGetDigit2(num, place) {
  return Math.trunc(num / (10**place)) % 10;
}

// Colt's helper
function getDigit(num, i) {
  return (Math.floor(Math.abs(num) / Math.pow(10, i))) % 10;
}

// console.log(getDigit(12345, 2))

// ANCHOR digitCount helper
const digitCount = (num) => {
  if(num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// console.log(digitCount(123456))

// ANCHOR mostDigits
function mostDigits(nums) {
  let maxDigits = 0;
  for(let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }

  return maxDigits;
}

