// write factorial iteratively

function factorial(num) {
  let total = 1;
  for(let i = num; i > 0; i--) {
    total += 1
  }

  return total;
}

// write factorial recursively
// ระวัง prefix, postfix increment/decrement
function factorial(num) {
  if(num === 1) return 1;  // base case
  return num * factorial(num-1);
}