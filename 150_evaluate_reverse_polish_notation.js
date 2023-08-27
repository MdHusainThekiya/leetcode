/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {

  let opt = {
    "+": (a, b) => { return parseInt(a) + parseInt(b) },
    "-": (a, b) => { return parseInt(a) - parseInt(b) },
    "*": (a, b) => { return parseInt(a) * parseInt(b) },
    "/": (a, b) => { return parseInt(a) / parseInt(b) },
  }

  for (let index = 0; index < tokens.length; index++) {
    let func = opt[tokens[index]]
    if (typeof func === 'function') {
      let val = func(tokens[index - 2], tokens[index - 1])
      tokens.splice(index - 2, 3, val);
      index = index - 2;
    }
  }

  return parseInt(tokens[0]);

};


console.log(evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]));