/**
 * @param {number[]} height
 * @return {number}
 */
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