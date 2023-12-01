// /**
//  * @param {number[]} temperatures
//  * @return {number[]}
//  */
// var dailyTemperatures = function(temperatures) {

//   if (temperatures.length <= 1) {
//     return [0];
//   }

//   let diffDays = []; 
//   let firstP = 0;
//   let secondP = 1;

//   while( firstP <= temperatures.length - 1) {
    
//     if (temperatures[secondP] > temperatures[firstP]) {
//       diffDays.push((secondP - firstP));
//     } else if ( secondP >= temperatures.length - 1 ) {
//       diffDays.push(0);
//     } else {
//       secondP++;
//       continue;
//     }
//     firstP = firstP + 1;
//     secondP = firstP + 1;

//   }

//   return diffDays;
// };



/** OPTIMIZED METHOD */
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {

  let res = new Array(temperatures.length).fill(0);
  let monotonicStack = []; // [index, temp]

  for (let i = 0; i < temperatures.length; i++) {
    while (monotonicStack.length > 0
      && temperatures[i] > monotonicStack[monotonicStack.length - 1][1]
    ) {
      let [index, temp] = monotonicStack.pop();
      res[index] = (i - index)
    }
    monotonicStack.push([i, temperatures[i]])
  }
  
  return res;
};