/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

// /**
//  * @param {function} isBadVersion()
//  * @return {function}
//  */
// // BRUIT-FORCE SOLUTION
// var solution = function(isBadVersion) {
//   /**
//    * @param {integer} n Total versions
//    * @return {integer} The first bad version
//    */
//   return function(n) {
//     for (let index = 1; index <= n; index++) {
//       if (isBadVersion(index)) {
//         return index;
//       }
//     }
//   };
// };

// BINARY SEARCH SOLUTION
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let pointer = 1;
    while (pointer < n) {
      let tempPointer = Math.floor((n + pointer) / 2);
      if (isBadVersion(tempPointer)) {
        n = tempPointer
      } else {
        pointer = tempPointer + 1
      }
    }
    return pointer
  };
};

console.log(solution((num) => { return num >= 10 ? true : false })(10));