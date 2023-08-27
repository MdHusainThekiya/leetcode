/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {

  if (nums.length === 3) {
    if (nums[0] + nums[1] + nums[2] === 0) {
      return [nums];
    } else {
      return [];
    }
  }
  nums.sort((a,b)=>(a - b))
  let finalSet = new Set();
  for (let index = 0; index < nums.length; index++) {
    if (nums[index] > 0) {
      break
    }
    customTwoSum(nums, index + 1, nums.length - 1, index, finalSet);
  }
  let result = [];
  finalSet.forEach((arrStr) => {
    result.push(arrStr.split(','));
  })
  return result;
};

var customTwoSum = (nums, leftPointer, rightPointer, a, finalSet) => {
  while (leftPointer < rightPointer) {
    if (nums[a] + nums[leftPointer] + nums[rightPointer] === 0) {
      finalSet.add([nums[a], nums[leftPointer], nums[rightPointer]].toString());
      leftPointer++;
    } else if (nums[a] + nums[leftPointer] + nums[rightPointer] > 0) {
      rightPointer--;
    } else {
      leftPointer++;
    }
  }
}

// console.log(threeSum([-1,0,1,2,-1,-4]));
// console.log(threeSum([0,1,1]));
console.log(threeSum([3,0,-2,-1,1,2]));