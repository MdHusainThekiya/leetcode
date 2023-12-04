/**
 * @param {number[]} height
 * @return {number}
 */

/** 
 * BRUITFORCE SOLUTION
 * 
  var maxArea = function(height) {
    
  let monoStack = [];
  let maxHeightYet = 0;
  let maxArea = 0;

  for (let i = 0; i < height.length; i++) {

    let currentH = height[i];
    let monoLen = monoStack.length

    for(let j = monoLen - 1; j > 0; j--) {
      let [h, i] = monoStack[j];
      if (currentH > h && h < maxHeightYet) {
        monoStack.pop();
      } else {
        break;
      }
    }

    if (maxHeightYet < currentH) {
      maxHeightYet = currentH;
    }

    monoStack.push([currentH, i]);
  }

  while (monoStack.length > 1) {
    let [h, i] = monoStack.pop();

    for( let j = 0; j < monoStack.length; j++ ) {
      let [thisH, thisI] = monoStack[j];
      let thisArea = (Math.min(h, thisH) * (i - thisI));
      if (thisArea > maxArea) {
        maxArea = thisArea;
      }
    }
  }

  return maxArea;
};

*/

/** OPTIMIZED TWO POINTER SOLUTION */
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let maxArea = 0;
  let leftPointer = 0;
  let rightPointer = height.length - 1

  while(leftPointer <= rightPointer) {

    let leftVal = height[leftPointer];
    let rightVal = height[rightPointer];

    /** calculate */
    let thisArea = Math.min( leftVal, rightVal ) * (rightPointer - leftPointer);
    if (thisArea > maxArea) {
      maxArea = thisArea;
    }

    if (leftVal > rightVal) {
      rightPointer--;
    } else {
      leftPointer++;
    }

  }

  return maxArea;
};