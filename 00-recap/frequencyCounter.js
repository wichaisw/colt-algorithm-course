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

console.log(same(firstArray, secondArray));