// รับ 2 strings เช็กว่าอักษรใน string แรก ปรากฏใน string2 ไหม
// order ของอักษรขาดได้ แต่ห้ามเปลี่ยน
// O(n) time
// O(1) Space
function isSubsequence(str1, str2) {
  let i = 0;
  let j = 0;
  if(str1.lenghth > str2.lenghth) {
    return false;
  }

  if(!str1) return true;
  while(j < str2.length) {
    console.log(str1[i],str2[j])
    if(str1[i] === str2[j]) i++;
    if(i === str1.length) return true;
    j++
  }
  return false;
}

console.log(isSubsequence('sing', 'sting'))
console.log(isSubsequence('abc', 'acb'))


// isSubsequence Solution - Recursive but not O(1) Space
function isSubsequence(str1, str2) {
  if(str1. length === 0) return true
  if(str2. length === 0) return false
  if(str2[0] === str1[0]) return isSubsequence(str1. slice(1), str2. slice(1))  
  return isSubsequence(str1, str2. slice(1))
}