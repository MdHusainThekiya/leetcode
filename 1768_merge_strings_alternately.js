/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {

  let larger = word1;
  let smaller = word2;

  if (word2.length > word1.length) {
    smaller = word1;
    larger = word2;
  }

  let finalString = word1[0] + word2[0]
  for (let i=1; i<smaller.length; i++) {
    finalString = finalString + word1[i] + word2[i];
  }
  for (let i=smaller.length; i < larger.length; i++) {
    finalString = finalString + larger[i]
  }
  return finalString;
};