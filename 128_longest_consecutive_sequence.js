/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {

  if (nums.length == 0) {
    return 0;
  }

  nums = nums.sort((a,b) => {
    if (a < b) {
      return -1
    } else if (a > b) {
      return 1
    } else {
      return 0
    }
  });

  let maxLength = 1;
  let counter = 1;

  for(let i = 1; i < nums.length; i++) {
    if (nums[i - 1] === nums[i]) {
      continue
    }
    
    if (nums[i - 1] + 1 !== nums[i]) {
      counter = 1;
      continue;
    }

    counter++;
    if (counter > maxLength) {
      maxLength++;
    }
  }

  return maxLength;
};