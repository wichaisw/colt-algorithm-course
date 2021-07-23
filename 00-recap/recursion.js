// factorial iteratively
const factorial = (num) => {
  let total = 1;
  for(let i = num; i > 0; i--) {
    total *= i;
  }

  // for(let i = 1; i <= num; i++) {
  //   total *= i;
  // }

  return total;
}

// factorial recursively

const recursiveFactorial = (num) => {
  if(num === 0) return 1;
  return num * recursiveFactorial(num - 1);
}

// helper method recursion
const collectOddValues = (arr) => {
  let result = [];

  const helper = (helperInput) => {
    if(helperInput.length === 0) {
      return;
    }

    if(helperInput[0] % 2 !== 0) {
      result.push(helperInput);
    }
    helper(helperInput.slice(1))
  }
  
  helper(arr);

  return result;
}

const pureRecusionCollectOddValues = (arr) => {
  let newArr = [];

  if(arr.length === 0) {
    return newArr;
  }

  if(arr[0] % 2 !== 0) {
    newArr.push[arr[0]];
  }

  newArr = newArr.concat(collectOddValues(arr.slice(1)));
  return newArr;
}


function factorialWithHelper(num){

  function helper(num) {
    if(num === 1 || num === 0) {
      return 1;
    }
      
    num *= helper(num - 1);    
    return num;
}   
  
  helper(num);

  return num;

}


// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60
function productOfArray(numArr) {
  if(numArr.length === 0) {
      return 1;
  }
  
  return numArr[0] * productOfArray(numArr.slice(1));

}

// SAMPLE INPUT/OUTPUT
// recursiveRange(6) // 21
// recursiveRange(10) // 55 
function recursiveRange(num){
  if(num === 0) return 0;
  return num += recursiveRange(num - 1)
}


// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465
function fib(num){
  if(num < 2) {
      return n;
  } else {
      
      return fib(num-1) + fib(num-2);
  }

  return fib(num-1) + fib(num-2);
}

function reverse(str){
  let newStr = "" ;

  function helper(str) {
    if(str.length === 0) {
      return str;
    }
    newStr += str[str.length -1];
    console.log(str)


    return helper(str.slice(0, str.length - 1));
  }
  
  helper(str);
  console.log(newStr)
  return newStr;
}

function isPalindrome(str){
  if(str.length === 0) {
    return true;
  }

  if( !(str[0] === str[str.length-1]) ) {
    return false;
  }
  
  if(str.length === 1) return true;
  
  return isPalindrome(str.slice(1, -1))
}

// accept value, and a callback, return true if a member is true in callback
const isOdd = val => val % 2 !== 0;
function someRecursive(arr, callback){
  if(arr.length === 0) {
    return false;
  } 

  if(callback(arr[arr.length - 1])) {
    return true;
  }

  arr.pop();

  return someRecursive(arr, callback);
}


// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3
function flatten(arr){
  let newArr = [];

  for(let i = 0; i < arr.length; i++) {
    if(Array.isArray(arr[i])) {
      console.log(arr[i])
      newArr = newArr.concat(flatten(arr[i]));
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
  

function capitalizeFirst (strArr) {
  let newArr = [];    

  function helper(strArr) {
    console.log(strArr)
    if(strArr.length === 0) {
      return newArr;
    }

    newArr.push(strArr[0].charAt(0).toUpperCase() + strArr[0].substr(1));

    return helper(strArr.slice(1));
  }

  helper(strArr);
  
  return newArr;
}

const obj = {
  stuff: "foo",
  data: {
      val: {
          thing: {
              info: "bar",
              moreInfo: {
                  evenMoreInfo: {
                      weMadeIt: "baz"
                  }
              }
          }
      }
  }
}

function collectStrings(obj) {
  let result = [];

  function gatherString(obj) {
    for(let key in obj) {
      if(typeof(obj[key]) === 'string') {
        result.push(obj[key]);
      } else {
        gatherString(obj[key]);
      }
    }
  }

  gatherString(obj);

  return result;
}

console.log(collectStrings(obj));
