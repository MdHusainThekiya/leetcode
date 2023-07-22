/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  try {
    let newLength = nums.join(',').split(`,${target}`)[0].split(',').length;
    if (nums.length === newLength && nums.length > 1) {
      return -1
    } else if (nums.length === newLength && nums.length === 1) {
      return nums.indexOf(target)
    } else {
      return newLength
    }
  } catch (error) {
    return -1
  }
};

console.log(search([12], 12));