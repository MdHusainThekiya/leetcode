/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  
  s = s.toLowerCase().split('');
  let filteredArr = [];
  for (let index = 0; index < s.length; index++) {
    let element = s[index];
    if ((/^[a-z0-9]*$/).test(element)){
      filteredArr.push(element);
    }
  }

  let leftArr = [];
  let middle = null;

  if (filteredArr.length % 2 == 0) {
    leftArr = filteredArr.splice(0, filteredArr.length/2)
    leftArr = leftArr.reverse();
    if (leftArr.join() === filteredArr.join()) {
      return true;
    } else {
      return false
    }

  } else {
    leftArr = filteredArr.splice(0, Math.floor(filteredArr.length/2))
    leftArr = leftArr.reverse();
    middle = filteredArr.shift();
    if (leftArr.join() === filteredArr.join()) {
      return true;
    } else {
      return false
    }
  }
  
};


// console.log(isPalindrome('A man, a plan, a anal: Panama'));
// console.log(isPalindrome('race a car'));
// console.log(isPalindrome(' '));