/**
 * @param {string} s
 * @return {number}
 */

/** bruitforce method */
// var lengthOfLongestSubstring = function (s) {
//   let lastLongestLength = 0;
//   let longestSubString = '';
//   let mainIndex = 0;

//   for (let index = 0; index < s.length; index++) {
//     let thisVal = s[index];

//     if (!longestSubString.includes(thisVal)) {
//       longestSubString+=thisVal;
//     } else {
//       longestSubString = '';
//       index = mainIndex;
//       mainIndex++;
//     }
//     if (lastLongestLength < longestSubString.length) {
//       lastLongestLength = longestSubString.length;
//     }
//   }
//   return lastLongestLength;
// };

/** using sets */
var lengthOfLongestSubstring = function (s) {
  if (s.length < 2) return s.length;

  let set = new Set();
  let maxSize = 0;
  let leftPointer = 0;
  let rightPointer = 0;

  while(rightPointer < s.length) {
    while (set.has(s[rightPointer])) { // [a, b, c, b] [lP => 0, rP => 3]
      set.delete(s[leftPointer]);
      leftPointer++;
    }
    set.add(s[rightPointer]);
    maxSize = Math.max( maxSize, set.size );
    rightPointer++;
  }

  return maxSize;
};