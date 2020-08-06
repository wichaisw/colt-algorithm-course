// These are common pattern I might encounter

// - Frequency Counters (unofficial name) -

// use objects or sets to collect values/frequencies of values
// this can often avoid the need for nested loop or O(n^2) operations with arrays, strings

// my attempt: for loop & loop in indexOf
// Time complexity O(n^2) quadratic
/*
  let same = (arr1, arr2) => {
    if(arr1.length === arr2.length) {
      let correctIndex
      arr1.map((item) => {
        correctIndex = arr2.indexOf(item**2)    
        if(correctIndex === -1) {
          return false;
        }
        arr2.splice(correctIndex, 1);
      })

      if(arr2.length === 0) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
*/

same([1,2,3], [4,1,9])

// Frequency Counters patter: 
// Tiem complexity O(n) linear
// idea หลักคือการสร้าง object มาเก็บ frequency โดยให้ key เป็นค่าที่ต้องการนับ value เป็นจำนวนครั้งที่ปรากฏ
// น่าจะเอาไปประยุกต์ใช้กับการหา unique object ใน array ได้
function same (arr1, arr2) {
  if(arr2.length !== arr2,length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for(let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  for(let key in frequencyCounter1) {
    // ใช้ in operator เช็กว่ามี key ของ frequencyCounter2 ที่ค่าตรงกับ key ** 2  ไหม
    if(!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if((frequencyCounter2[key ** 2]) !== frequencyCounter1[key]) {
      return false;
    }
    return true;
  }
}