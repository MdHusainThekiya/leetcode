/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {

  let maxArea = 0;
  let monoStack = [];

  for (let index = 0; index < heights.length; index++) {
    const currentVal = heights[index];

    // check max height before pop
    if (currentVal > maxArea) {
      maxArea = currentVal;
    }

    let pushIndex = index;
    const monoLength = monoStack.length;

    for (let jndex = monoLength - 1; jndex >= 0 ; jndex--) {
      const [monoVal, i] = monoStack[jndex];

      if (monoVal >= currentVal) {
        pushIndex = i;

        // check max height before pop
        if (monoVal * (index - i) > maxArea) {
          maxArea = monoVal * (index - i)
        }
        monoStack.pop();
      } else {
        break;
      }

    }

    monoStack.push([currentVal, pushIndex])

  }

  const monoMaxIndex = heights.length;

  for (let kndex = 0; kndex < monoStack.length; kndex++) {
    const [ monoVal, i ] = monoStack[kndex];
    if (monoVal * (monoMaxIndex - i) > maxArea) {
      maxArea = monoVal * (monoMaxIndex - i);
    }
  }

  return maxArea;

};

// console.log(largestRectangleArea([2,1,5,6,2,3]));
// console.log(largestRectangleArea([2,4]));
// console.log(largestRectangleArea([2,1,2]));