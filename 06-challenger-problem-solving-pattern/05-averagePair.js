// รับ sorted array ของ integer กับ target average
// หาว่ามีเลขคู่ไหนไหมที่เฉลี่ยกันแล้วได้ค่าเท่ากับ target
// อาจมีมากกว่า 1 คู่ก็ได้ แต่ต้องการคำตอบแค่ true, false

function averagePair(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while( right > left) {
    if((arr[left] + arr[right]) / 2 === target) {
      return true;
    } else if((arr[left] + arr[right]) / 2 > target) {
      right -= 1;
    } else {
      left +=1
    }
  }
  return false;
}

console.log(averagePair([1,3,5,6,7,10,12,19],8))