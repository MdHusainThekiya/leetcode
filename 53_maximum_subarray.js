/**
 * @param {number[]} nums
 * @return {number}
 */

// var maxSubArray = function (nums) {
//   let result = nums[0];
//   for (let startPointer = 0; startPointer < nums.length; startPointer++) {
//     let thisSum = result;
//     let tempAdd = 0;
//     for (let endPointer = startPointer; endPointer < nums.length; endPointer++) {
//       tempAdd += nums[endPointer];
//       if (tempAdd >= thisSum) { thisSum = tempAdd };
//     }
//     if (thisSum >= result) { result = thisSum };
//   }
//   return result
// };


var maxSubArray = function (nums) {

  let startPointer = 0;
  let endPointer = 0;
  let maxYet = 0;
  let tempVal = 0;

  while (startPointer < nums.length && endPointer < nums.length) {
    if (nums[endPointer] + tempVal <= 0) {
      endPointer++;
      startPointer = endPointer;
      tempVal = 0;
    } else {
      tempVal += nums[endPointer];
      if (tempVal > maxYet) {
        maxYet = tempVal;
      }
      endPointer++;
    }
  }

  if (maxYet === 0) {
    maxYet = nums[0];
    nums.forEach((val) => {
      if (maxYet < val) {
        maxYet = val;
      }
    })
  }

  return maxYet;
};