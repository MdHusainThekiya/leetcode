/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {

  const stack = [];
  const operation = {
    "+": (b, a) => { return parseInt(a) + parseInt(b) },
    "-": (b, a) => { return parseInt(a) - parseInt(b) },
    "*": (b, a) => { return parseInt(a) * parseInt(b) },
    "/": (b, a) => { return parseInt(a) / parseInt(b) },
  }

  for (let index = 0; index < tokens.length; index++) {
    let func = operation[tokens[index]]
    if (typeof func === 'function') {
      let val = func(stack.pop(), stack.pop());
      stack.push(val);
    } else {
      stack.push(tokens[index])
    }
  }

  return parseInt(stack[0]);

};


console.log(evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]));