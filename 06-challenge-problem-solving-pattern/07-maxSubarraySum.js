// รับ array ของ interger, กับ 1 number ให้หาผลรวมที่มากที่สุดของ subarray โดย number กำหนดจำนวน subarray ที่เอามาบวกกัน 
// สมาชิกที่เอามาบวกกันต้องอยู่ติดเรียงกัน

function maxSubarraySum(arr, num) {
  if (num > arr.length) return null;

  let start = 0;
  let end = (start + num) - 1;
  let max = -Infinity;
  let temp = 0;

  // สร้างผลรวมแรก โดยบวกเลขจนกว่าะถึง index = end
  for (let i = 0; i <= end; i++) {
    temp += arr[i];
  }
  max = temp;

  // ลบค่าของตัวเลขตัวหน้าทิ้ง แล้วเพิ่มตัวท้ายตัวใหม่เข้าไป
  while (end < arr.length) {
    temp = temp - arr[start] + arr[end + 1]
    if (temp > max) {
      max = temp;
    }
    start++;
    end++;
  }

  return max;
}

// Colt's solution
function maxSubarraySum(arr, num) {
  if (arr.length < num) return null;

  let total = 0;
  for (let i = 0; i < num; i++) {
    total += arr[i];
  }
  let currentTotal = total;
  for (let i = num; i < arr.length; i++) {
    currentTotal += arr[i] - arr[i - num];
    total = Math.max(total, currentTotal);
  }
  return total;
}