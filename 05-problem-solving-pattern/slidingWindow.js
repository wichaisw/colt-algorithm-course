// Sliding Window
// ใช้หา subset ของข้อมูลใน string / array
// Time complexity: O(n)

// concept คือการสร้าง window ที่เลื่อนไปเรื่อยๆ
// window ย่อ-ขยาย ปิดแล้วเปิดใหม่ก็ได้ตามกรณี
// ไม่ต้องสร้าง array ใหม่มาทุกรอบ
// ข้อมูลไม่จำเป็นต้อง sorted

// เช่น หา longest sequence of unique character in string

// เช่น รับ array กับ integer n ให้หาผลรวมที่มีค่ามากที่สุด ของ array of integers โดย n เป็น จำนวน sequence ของสมาชิก array
// naive solution
// Time complexity O(n^2) quadratic
function maxSubarraySum(arr, num) {
  if(num > arr.length) {
    return null;
  }

  let max = -Infinity
  for(let i = 0; i < arr.length - num + 1; i++) {
    let temp = 0
    for(let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if(temp > max) {
      max = temp;
    }
    console.log(temp, max)
  }
  return max;
}

// Sliding Window pattern
// Time complexity: O(n) linear
function maxSubarraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if(arr.length < num) return null;
  // บวกเลขชุดแรกมาเก็บไว้
  for(let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum
  
  // ไม่ได้บวกใหม่ทุกรอบ แต่เลื่อน window ด้วยการลบตัวแรกออก แล้วเอาตัวท้ายใหม่เพิ่มเข้าไป
  for(let i = num; i< arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

console.log(maxSubarraySum([2,6,9,2,1,8,5,6,3], 3))

