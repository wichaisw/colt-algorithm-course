// Pure Recursion tip
// ใช้ slice, concat, spread operator เพื่อสร้าง array ใหม่ไม่ mutate
// string เป็น immuatable ต้องใช้ slice, substr, substring เพื่อสร้าง string ใหม่

function collectOddValues(arr) {
  let newArr = [];

  if(arr.length === 0) {
    return newArr;
  }

  if(arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }

  newArr = newArr.concat(collectOddValues(arr.slice(1)));
  return newArr;
}