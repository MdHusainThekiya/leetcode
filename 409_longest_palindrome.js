/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
  let hashmap = new Map();

  for (const element of s) {
    let count = hashmap.get(element);
    if (count) {
      hashmap.set(element, count + 1);
    } else {
      hashmap.set(element, 1);
    }
  }

  let total = 0;
  let one = null;
  let moreThanOne = [];

  for (const values of hashmap.values()) {
    if (values % 2 === 0) { // even
      total+=values;
    } else { // odd
      
      if (values === 1) {
        one = 1;
      } else {
        moreThanOne.push(values);
      }

    }
  }

  if (moreThanOne.length > 0) {
    for (let index = 0; index < moreThanOne.length; index++) {
      const element = moreThanOne[index];
      if (index === 0) {
        total = total + element;
      } else {
        total = total + (element - 1);
      }
    }
  } else {
    total = total + one;
  }

  return total;
};

console.log(longestPalindrome("ababab"));