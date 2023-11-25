/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {

  let topKFMap = {};
  let tArr = [];
  let indexCounter = 0;

  // prepare 2D array [ ["1", 3], ["2", 2], ["3", 1] ]
  for(let i=0; i < nums.length; i++) {
    if (typeof topKFMap[(nums[i]).toString()] === 'number') {
      tArr[topKFMap[(nums[i]).toString()]][1]++
    } else {
      topKFMap[(nums[i]).toString()] = indexCounter;
      tArr[indexCounter] = [(nums[i]).toString(), 1];
      indexCounter++;
    }
  }

  // sorting part
  tArr = tArr.sort((a,b) => {
    if (a[1] < b[1]) {
      return 1;
    } else if (a[1] > b[1]) {
      return -1;
    } else {
      return 0;
    }
  })

  // retrun required top numbers
  let resultArray = [];
  for (let j = 0; j < k; j++) {
    resultArray.push( Number(tArr[j][0]) )
  }

  return resultArray;

};