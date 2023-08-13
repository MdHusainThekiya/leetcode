/**
 * @param {number[]} nums
 * @return {number}
 */

var maxSubArray = function (nums) {
  let result = nums[0];
  for (let startPointer = 0; startPointer < nums.length; startPointer++) {
    let thisSum = result;
    let tempAdd = 0;
    for (let endPointer = startPointer; endPointer < nums.length; endPointer++) {
      tempAdd += nums[endPointer];
      if (tempAdd >= thisSum) { thisSum = tempAdd };
    }
    if (thisSum >= result) { result = thisSum };
  }
  return result
};