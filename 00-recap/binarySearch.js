const binarySearch = (arr, val) => {
  let left = 0;
  let right = arr.length - 1;
  let pointer;

  while (left <= right) {
    pointer = Math.floor((right + left) / 2)
    if (arr[pointer] === val) {
      return pointer;
    }

    if (arr[pointer] < val) {
      left = pointer + 1;
    } else if (arr[pointer] > val) {
      right = pointer - 1;
    }
  }

  return -1;
}

console.log(binarySearch([2,5,6,8,20,35]))
