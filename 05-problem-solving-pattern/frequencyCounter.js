// These are common pattern I might encounter

// - Frequency Counters (unofficial name) -
// Time Complexicy: O(n) linear

// use objects or sets to collect values/frequencies of values
// **this can often avoid the need for nested loop or O(n^2) operations with arrays, strings

// ให้ รับ 2 array แล้วเช็กว่าสมาชิกใน array2 มีค่าเท่ากับสมาชิกใน array1 ยกกำลัง 2 และความถี่ในการปรากฏต้องเท่ากัน
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

// Frequency Counters pattern: 
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

// Anagram practice
// Time complexity: O(n) linear
function validAnagram(word, anagram){
  // add whatever parameters you deem necessary - good luck!
  if(word.length !== anagram.length) {
      return false;
  }
  
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
    for(let cha of word) {
        frequencyCounter1[cha] = (frequencyCounter1[cha] | 0) + 1;
    }
    for(let cha of anagram) {
        frequencyCounter2[cha] = (frequencyCounter2[cha] | 0) + 1;
    }
    
    for(let key in frequencyCounter1) {
        if(frequencyCounter1[key] !== frequencyCounter2[key]) {
            return false;
        }
    }
    return true;
}

// Colt's solution
function coltValidAnagram(first, second) {
  if(first.length !== second.length) {
    return false;
  }

  const lookup = {};
  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    // if letter exists, increment, otherwise set to 1
    lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
  }

  for (let i = 0; i < second.length; i ++) {
    let letter = second[i];
    // can't find letter or letter is zero then it's not anagram
    if(!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -=1;
    }
  }

  return true;
}

validAnagram('anagram', 'nagaram')

