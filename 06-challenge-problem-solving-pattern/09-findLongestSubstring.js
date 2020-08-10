// รับ 1 string แล้ว return length ชอง substring ที่ยาวที่สุด ที่ตัวอักษรไม่ซ้ำกัน

function findLongestSubstring(str){
  if(str.length === 0) return 0;
  let chaCollection = {};
  let longest = 0;
  let start = 0;

  // ขยับ window ด้วย start และ end ที่เลื่อนไปเรื่อยๆ
  for(let end = 0; end < str.length; end++) {
    if(!chaCollection[str[end]]) {
      chaCollection[str[end]] = true;
    } else {
      // ถ้าเจอตัวซ้ำ ให้เลื่อนหน้าต่าง แล้วเคลียร์ collection ใหม่
      chaCollection = {};
      start++;        
      end = start - 1 //  ต้อง -1 เพราะขึ้นลูปรอยใหม่แล้ว end++
    }

    // i-start ได้ระยะห่าง ต้อง +1 จึงเป็น length
    if( end - start + 1 > longest) {
      longest = end - start + 1;
    }
  }

  return longest;
}

console.log(findLongestSubstring('bbb'));
console.log(findLongestSubstring('thisishowwedoit'));

// Colt's solution 
function findLongestSubstring(str) {
  let longest = 0;
  let seen = {};
  let start = 0;
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    // index - beginning of substring + 1 (to include current in count)
    longest = Math.max(longest, i - start + 1);
    // store the index of the next char so as to not double count
    seen[char] = i + 1;
  }
  return longest;
}