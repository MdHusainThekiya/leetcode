/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {

  let hashmap = new Map();

  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];
    let count = hashmap.get(element);

    if (!count) {
      count = 1
    } else {
      count+=1
    }
    hashmap.set(element, count);
    
    if (count >= (nums.length)/2) {
      return element;
    }
  }
};

console.log(majorityElement([1,2,3,3]))