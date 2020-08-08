// Divide and Conquer (official name)

// ย่อย data set เป็นก้อนเล็กๆ
// repeat a process with a subset of data
// ลด time complexity อย่างมาก
// binary search, quick sort, & merge sort ฯลฯ ใช้ pattern นี้

// รับ sorted array, num หา index ของ num นั้น
// ถ้าไม่มี ให้คืนเป็น -1

// naive solution
// Linear Search
// Time complexity: O(n)
function search(arr, val) {
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === val) {
      return i;
    }
  }
  return -1;
}

// Binary search
// ใช้ divide & conquer
// ลด O(n) เหลือ O(lon n)
// ต้องใช้กับ value ที่ sorted เท่านั้น
// idea คือ เช็กดึงค่าตรงกึ่งกลาง array มาตัวนึง
// มาเช็กว่า value ที่จะหามีค่น้อยกว่าหรือมากกว่า ค่ากึ่งกลาง
// เช่น หาค่า 15 จาก [1,2,3,5,6,8,9,12,15,16,29]
// หั่นครึ่งที่ 8 / เช็กว่า 15 มากกว่า 8 ไหม ถ้าใช่ก็หั่นครึ่งแรกออกได้เลยไม่ต้องไปลูปหา
// หั่นครึ่งซ้ำไปเรื่อยๆ
function search(array, val) {
  let min = 0;
  let max = array.length - 1;

  while(min <= max) {
    let middle = Math.floor((min + max) / 2);
    let currentElement = array[middle];

    if(currentElement < val) {
      min = middle + 1;
    } else if (currentElement > val) {
      max = middle -1;
    } else {
      return middle;
    }
  }

  return -1;
}



