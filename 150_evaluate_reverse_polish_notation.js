/**
 * @param {string[]} tokens
 * @return {number}
 */

/** MY METHOD */
// var evalRPN = function (tokens) {

//   let opt = {
//     "+": (a, b) => { return parseInt(a) + parseInt(b) },
//     "-": (a, b) => { return parseInt(a) - parseInt(b) },
//     "*": (a, b) => { return parseInt(a) * parseInt(b) },
//     "/": (a, b) => { return parseInt(a) / parseInt(b) },
//   }

//   for (let index = 0; index < tokens.length; index++) {
//     let func = opt[tokens[index]]
//     if (typeof func === 'function') {
//       let val = func(tokens[index - 2], tokens[index - 1])
//       tokens.splice(index - 2, 3, val);
//       index = index - 2;
//     }
//   }

//   return parseInt(tokens[0]);

// };


/** USING stack dataStructure */
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