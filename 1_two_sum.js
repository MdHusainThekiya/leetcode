/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let numsLen = nums.length;
  while(nums.length != 0){
      let x = target - nums.shift();
      let second = nums.indexOf(x);
      if ( second != -1){
          return [((numsLen - 1) - (nums.length)), (second + numsLen - nums.length)]
      }
  }
};