// 2 positive numbers หาว่าทั้งสองตัวประกอบด้วยเลขที่มี frequency ในการปรากฏเท่ากันไหม

function sameFrequency(num1, num2) {
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  let strNum1 = String(num1);
  let strNum2 = String(num2);

  if(strNum1.length !== strNum2.length) return false;
  for(let i = 0; i < strNum1.length; i++) {
    frequencyCounter1[strNum1[i]] = (frequencyCounter1[strNum1[i]] || 0) + 1;
  }
  for(let i = 0; i < strNum2.length; i++) {
    frequencyCounter2[strNum2[i]] = (frequencyCounter2[strNum2[i]] || 0) + 1;
  }

  for(let key in frequencyCounter2) {
    if(frequencyCounter2[key] !== frequencyCounter1[key]) {
      return false;
    }
  }

  return true;
}

function sameFrequency(num1, num2) {
  let strNum1 = String(num1);
  let strNum2 = String(num2);
  let lookUp = {};

  if(strNum1.length !== strNum2.length) {
    return false;
  }

  for(let i = 0; i < strNum1.length; i++) {
    (lookUp[strNum1[i]]) ? lookUp[strNum1[i]] += 1 : lookUp[strNum1[i]] = 1;
  }

  for(let val of strNum2) {
    if(!lookUp[val]) {
      return false;
    } else {
      lookUp[val]--
    }
  }

  console.log(lookUp)
  return true;
}

sameFrequency(123,321)