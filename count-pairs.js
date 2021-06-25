// add whatever parameters you deem necessary
function countPairs(arr, num) {
  arr.sort((a, b) => a - b);
  let count = 0;
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    let sum = arr[start] + arr[end];
    if (sum === num) {
      count++;
      start++;
      end--;
    } else if (sum < num) {
      start++;
    } else {
      end--;
    }
  }
  return count;
}


// countPairs([3,1,5,4,2], 6) // 2 (1,5 and 2,4)
// countPairs([10,4,8,2,6,0], 10) // 3 (2,8, 4,6, 10,0)
// countPairs([4,6,2,7], 10) // 1 (4,6)
// countPairs([1,2,3,4,5], 10) // 0
// countPairs([1,2,3,4,5], -3) // 0
// countPairs([0,-4],-4) // 1
// countPairs([1,2,3,0,-1,-2],0) // 2