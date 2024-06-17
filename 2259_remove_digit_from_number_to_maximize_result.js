/**
 * @param {string} number
 * @param {character} digit
 * @return {string}
 */
var removeDigit = function (number, digit) {

  let max = 0;

  for (let i = 0; i < number.length; i++) {

    if (number[i] === digit) {
      let str = number.substring(0, i) + number.substring(i + 1, number.length);
      if (str > max) {
        max = str;
      }
    }

  }

  return max;

};