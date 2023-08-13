/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function (points, k) {

  const getSquareRootOf = (x2, y2) => {
    let x1 = 0;
    let y1 = 0;
    return Math.sqrt(Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2))
  }

  const hashMap = {};
  let randomNumber = 0.00000001

  for (let i = 0; i < points.length; i++) {
    let ans = getSquareRootOf(points[i][0], points[i][1])
    if (hashMap[ans]) {
      ans = ans + randomNumber;
      randomNumber = randomNumber + 0.00000001;
    }
    hashMap[ans] = points[i];
  }

  let tempArr = Object.keys(hashMap).sort(function (a, b) { return a - b });
  let resultArr = [];
  for (let j = 0; j < k; j++) {
    resultArr.push(hashMap[tempArr[j]])
  }
  
  return resultArr;
};