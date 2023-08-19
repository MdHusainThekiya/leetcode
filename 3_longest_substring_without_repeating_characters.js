/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let lastLongestLength = 0;
  let longestSubString = '';
  let mainIndex = 0;

  for (let index = 0; index < s.length; index++) {
    let thisVal = s[index];

    if (!longestSubString.includes(thisVal)) {
      longestSubString+=thisVal;
    } else {
      longestSubString = '';
      index = mainIndex;
      mainIndex++;
    }
    if (lastLongestLength < longestSubString.length) {
      lastLongestLength = longestSubString.length;
    }
  }
  return lastLongestLength;
};