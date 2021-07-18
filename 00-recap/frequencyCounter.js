// first try
const same = (arr1, arr2) => {
  if(arr1.length !== arr2.length) {
    return false;
  }

  let frequency = arr1.length;

  arr1.map((value) => {
    let indexOfPoweredValue = arr2.indexOf(value ** 2);
    if(arr2.indexOf(value * value) > -1 ) {
      frequency -= 1;
      arr2.splice(indexOfPoweredValue ,1)
    } else {
      return false;
    }
  })

  return frequency === 0 ? true : false;
}

let firstArray = [1,2,3,2];
let secondArray = [4,1,9,4];

// console.log(same(firstArray, secondArray));

const same2 = (arr1, arr2) => {
  if(arr1.length !== arr2.length) {
    return false;
  }

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  arr1.map((value, index) => {
    frequencyCounter1[value] = (frequencyCounter1[value] || 0) + 1;
  })

  arr2.map((value, index) => {
    frequencyCounter2[value] = (frequencyCounter2[value] || 0) + 1;
  })

  console.log(frequencyCounter1)
  console.log(frequencyCounter2)

  for(let key in frequencyCounter1) {
    if(!(key in frequencyCounter2)) {
      return false;
    }

    if(frequencyCounter1[key] !== frequencyCounter2[key ** 2]) {
      return false;
    } 
  }

  return true;
}

// let res = same2(firstArray, secondArray);
// console.log("res", res);


let anagram1 = 'anagram'
let anagram2 = 'nagaram'

const validateAnagram = (str1, str2) => {
  if(str1.length !== str2.length) {
    return false;
  }

  let counter1 = {};
  let counter2 = {};

  for(let cha of str1) {
    counter1[cha] = (counter1[cha] || 0) + 1;
  }  
  for(let cha of str2) {
    counter2[cha] = (counter2[cha] || 0) + 1;
  }  


  for(let key in counter1) {
    if(!(key in counter2)) {
      return false;
    }

    if(counter1[key] !== counter2[key]) {
      return false;
    }
  }

  return true;
}

let isAnagram = validateAnagram(anagram1, anagram2)
console.log(isAnagram)