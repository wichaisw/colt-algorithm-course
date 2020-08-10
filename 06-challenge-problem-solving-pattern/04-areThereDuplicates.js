// can be done with frequency counter or multiple pointers pattern

// frequency counter
function areThereDuplicates(...args) {
  let frequencyCounter = {};

  if(args.length === 0) {
    return false;
  }
  for(let val of args) {
    if(frequencyCounter[val]) {
      return true;
    } else {
      frequencyCounter[val] = true;
    }
  }
  return false;
}

console.log(areThereDuplicates(1,2,3,4,1))

// multiple pointer 
// ต้อง sort เท่านั้น
function areThereDuplicates(...args) {
  args.sort((a,b) => a - b);
  let start = 0;
  let next = 1;
  while(next < args.length) {
    if(args[start] === args[next]) {
      return true;
    }
    start++;
    next++;
  }
  return false;
}

// Colt's on linear solutin
function areThereDuplicates() {
  return new Set(arguments).size !== arguments.length;
}