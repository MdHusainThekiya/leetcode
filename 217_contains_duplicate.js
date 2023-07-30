/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  if (nums.length <= 1) {
    return false;
  }

  // const hashmap = new Map();
  const hashmap = {};
  let startPointer = 0;
  let endPointer = nums.length - 1;
  let tempVar = null;

  while (startPointer <= endPointer) {
    tempVar = nums[startPointer];
    if (hashmap[tempVar]) {
      return true;
    }
    hashmap[tempVar] = true;

    tempVar = nums[endPointer]
    if (hashmap[tempVar] && startPointer != endPointer) {
      return true;
    }
    hashmap[tempVar] = true;
    startPointer++;
    endPointer--;
  }

  return false;
};