// add whatever parameters you deem necessary
function sameFrequency(num1, num2) {

  let str1 = num1.toString();
  let str2 = num2.toString();
  if (str1.length !== str2.length) return false;

  let count1 = {};
  let count2 = {};

  for (let i = 0; i < str1.length; i++) {
    count1[str1[i]] = (count1[str1[i]] || 0) + 1;
  }

  for (let j = 0; j < str2.length; j++) {
    count2[str2[j]] = (count2[str2[j]] || 0) + 1;
  }

  for (let key in count1) {
    if (count1[key] !== count2[key]) return false;
  }

  return true;

}


sameFrequency(182, 281) // true
sameFrequency(34, 14) // false
sameFrequency(3589578, 5879385) // true
sameFrequency(22, 222) // false