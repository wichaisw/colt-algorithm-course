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
  if(num === 1) return 1;
  return num * recursiveFactorial(num - 1);
}

console.log(recursiveFactorial(4))