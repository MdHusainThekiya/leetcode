/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {

  if (temperatures.length <= 1) {
    return [0];
  }

  let diffDays = []; 
  let firstP = 0;
  let secondP = 1;

  while( firstP <= temperatures.length - 1) {
    
    if (temperatures[secondP] > temperatures[firstP]) {
      diffDays.push((secondP - firstP));
    } else if ( secondP >= temperatures.length - 1 ) {
      diffDays.push(0);
    } else {
      secondP++;
      continue;
    }
    firstP = firstP + 1;
    secondP = firstP + 1;

  }

  return diffDays;
};