/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  if (n <= 3) {
    return n;
  }

  let immidiateToPrevious = 2
  let previous = 3
  let counter = previous;
  while(counter !== n) {
    let temp = previous + immidiateToPrevious;
    immidiateToPrevious = previous;
    previous = temp;
    counter++;
  }
  return previous;
};
console.log(climbStairs(45));