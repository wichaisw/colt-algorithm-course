
// first try;
// accept sorted Array
// const sumZero = (arr) => {
//   let sumZeroArray;

//   let i = 0;
//   let j = 1;

//   while(i < arr.length - 1) {
//     if((arr[i] + arr[j]) === 0) {
//       sumZeroArray = [arr[i], arr[j]];
//       break;
//     }
//     j++;

//     if(j === arr.length) {
//       i++;
//       j = i + 1;
//     }
//   }


//   return sumZeroArray
// }

const sumZero = (arr) => {
  let sumZeroArray;

  let left = 0;
  let right = arr.length - 1;

  while(left < right) {
    let sum = arr[left] + arr[right]
    if(sum === 0) {
      sumZeroArray = [arr[left], arr[right]];
      break;
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }

  return sumZeroArray
}

let resultArr = sumZero([-4,-3,-2,-1,0,1,2,3,10]);

console.log(resultArr);