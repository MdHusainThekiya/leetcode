/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {

  let maxL = 0;
  let maxLArr = [];
  let maxR = 0;
  let maxRArr = [];
  let result = 0;

  let rightPointer = height.length - 1;

  for (let leftPointer = 0; leftPointer < height.length; leftPointer++) {
    
    let leftVal = height[leftPointer]
    let rightVal = height[rightPointer]

    if (leftVal > maxL) {
      maxL = leftVal
    }

    if (rightVal > maxR) {
      maxR = rightVal
    }

    maxLArr[leftPointer] = maxL;
    maxRArr[rightPointer] = maxR;
    
    rightPointer--;
  }

  for (let index = 0; index < height.length; index++) {
    let h = height[index];
    let calc = Math.min(maxLArr[index], maxRArr[index]) - h;
    console.log(calc);
    if (calc > 0) {
      result = result + calc;
    }

  }

  return result;
    
};