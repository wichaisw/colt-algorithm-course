// จะใช้ multiplePointer ข้อมูลต้อง sorted มาแล้ว

// รับ sorted array แล้วหา first pair ของสมาชิกที่ผลรวมเป็น 0
// ถ้าไม่มี คืน undefined 

// naive solution
// time complexity: O(n^2)
// Space complexity: O(1)

// function sumZero(arr) {
//   for(let i = 0; i < arr.length; i++) {
//     for(let j = i+1; j < arr.length; j++) {
//       if(arr[i] + arr[j] === 0) {
//         return [arr[i], arr[j]]
//       }
//     }
//   }
// }

// Multiple Pointer
// Time complexicy: O(n) linaer
// Space complexity: O(1)

function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;
  while(left < right) {
    let sum = arr[left] + arr[right];
    if(sum === 0) {
      return [arr[left], arr[right]];
    } else if(sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

console.log(sumZero([-3, -2, -1, -0, 1, 2]))

// exercise1 รับ sorted array ให้หาจำนวนสมาชิกทั้งหมด โดยไม่นับ value ที่ซ้ำ

// my solution ใช้ frequencyCounter
function countUniqueValues(arr) {
  let uniqueValues = [];
  let check = {};
  for (let val of arr) {
    if(check[val]) {
      continue;
    } else {
      uniqueValues.push(val)
      check[val] = true;
    }
  }
  return uniqueValues.length;
}

console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]))

// my solution ใช้ multiple pointers + frequency counter
function countUniqueValues(arr) {
  let left = 0
  let right = arr.length - 1;
  let uniqueValues = [];
  let check = {};
  while(left < right) {
    if(check[arr[left]]) {
      left++
    } else {
      uniqueValues.push(arr[left]);
      check[arr[left]] = true;
    }

    if(check[arr[right]]) {
      right--
    } else {
      uniqueValues.push(arr[right]);
      check[arr[right]] = true;
    }
  }
  return uniqueValues.length;
}

function countUniqueValues(arr) {
  let i = 0;
  let j = i + 1;
  for(j; j < arr.length; j++) {
    if(arr[i] !== arr[j]) {
      arr[i] = arr[j]
      i++
      console.log(arr[i])
    }
  }
  console.log('i', i)
  return arr
}

