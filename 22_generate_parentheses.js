/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {

  let result       = [];
  let stack        = [];
  let backtracking = (openC, closeC) => {
    if (openC === closeC && openC === n) {
      result.push(stack.join(""));
      return;
    }

    if (openC < n) {
      stack.push("(");
      backtracking(openC + 1,closeC);
      stack.pop();
    }

    if (closeC < openC) {
      stack.push(")");
      backtracking(openC,closeC + 1);
      stack.pop();
    }

  }

  backtracking(0, 0);
  return result;

};