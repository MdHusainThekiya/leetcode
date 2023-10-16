/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {

  /**
   * nums =>        [1,2,3,4]
   * forwardSum =>  [1,2,6,24]
   * backwordSum => [24,24,12,4]
   * answer =>      [(1*24),(1*12),(2*4),(6*1)] ===> [24,12,8,6]
   */
  
  const forwardSum = [];
  const backwordSum = [];
  const answer = [];

  let reverseIndex = nums.length - 1;
  for (let index = 0; index < nums.length; index++) {
    if (index === 0) {
      forwardSum.push(nums[index]);
      backwordSum.unshift(nums[reverseIndex]);
    } else {
      forwardSum.push(forwardSum[index - 1] * nums[index]);
      backwordSum.unshift(backwordSum[0] * nums[reverseIndex]);
    }
    reverseIndex = reverseIndex - 1;
  }

  for (let index = 0; index < nums.length; index++) {
    if (index === 0) {
      answer.push(1 * backwordSum[index + 1])
    } else if (index === nums.length - 1) {
      answer.push(forwardSum[index-1] * 1)
    } else {
      answer.push(forwardSum[index-1] * backwordSum[index + 1])
    }
  }

  return answer;

};