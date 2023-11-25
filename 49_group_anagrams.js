/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {

  const arrangeMap = {};
  
  for (let i = 0; i < strs.length; i++) {
    let sortedStr = strs[i].split("").sort().join("");
    if (arrangeMap[sortedStr] && Array.isArray(arrangeMap[sortedStr])) {
      arrangeMap[sortedStr].push(strs[i]);
    } else {
      arrangeMap[sortedStr] = [strs[i]]
    }
  }

  return Object.values(arrangeMap);

};