/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    
  if (s.length !== t.length) {
    return false;
  }

  let hashMap = {};

  for (let index = 0; index < s.length; index++) {
    let sElement = s[index];
    let tElement = t[index];

    if (typeof(hashMap[sElement]) === 'number') {
      hashMap[sElement]++;
    } else {
      hashMap[sElement] = 1;
    }

    if (typeof(hashMap[tElement]) === 'number') {
      hashMap[tElement]--;
    } else {
      hashMap[tElement] = -1;
    }

  }

  let arr = Object.values(hashMap);
  arr.sort();
  console.log(arr);
  if (arr[arr.length-1] != 0 || arr[0] != 0) {
    return false
  } else {
    return true
  }

};

// console.log(isAnagram( 'anagram', 'nagaram' ));
// console.log(isAnagram( 'rat', 'car' ));