/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  if (!ransomNote || !magazine || ransomNote.length > magazine.length) {
    return false;
  }

  const mHashmap = new Map();
  const rHashmap = new Map();
  let rIndex = ransomNote.length - 1;
  ransomNote = ransomNote.split('');

  for (const mElement of magazine) {
    let mCount = mHashmap.get(mElement);
    if (mCount) {
      mHashmap.set(mElement, mCount + 1);
    } else {
      mHashmap.set(mElement, 1);
    }

    if (rIndex >= 0) {
      let rElement = ransomNote[rIndex];
      let rCount = rHashmap.get(rElement);
      if (rCount) {
        rHashmap.set(rElement, rCount + 1);
      } else {
        rHashmap.set(rElement, 1);
      }
      rIndex--;
    }
  }

  let output = false;

  for (const rElement of rHashmap.keys()) {
    if (mHashmap.get(rElement) >= rHashmap.get(rElement)) {
      output = true;
    } else {
      output = false;
      break
    }
  }

  return output;
};
console.log(canConstruct("ce", "e"));