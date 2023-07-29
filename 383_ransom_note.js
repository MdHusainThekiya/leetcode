/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
// TIME TAKNE - 82ms
var canConstruct = function (ransomNote, magazine) {
  const mHashmap = new Map();
  const rHashmap = new Map();
  magazine   = magazine.split('');
  ransomNote = ransomNote.split('');
  for (let index = 0; index < magazine.length; index++) {
    let mElement = magazine[index];
    let rElement = ransomNote[index];
    let mCount   = mHashmap.get(mElement)
    let rCount   = rHashmap.get(rElement)

    if (mCount) {
      mHashmap.set(mElement, mCount + 1);
    } else {
      mHashmap.set(mElement, 1);
    }

    if (rCount) {
      rHashmap.set(rElement, rCount + 1);
    } else {
      rHashmap.set(rElement, 1);
    }

  }

  let output = false;

  for (let index = 0; index < ransomNote.length; index++) {
    let rElement = ransomNote[index];
    let mCount   = mHashmap.get(rElement)
    let rCount   = rHashmap.get(rElement)
    
    if (mCount >= rCount) {
      output = true;
    } else {
      output = false;
      break
    }

  }

  return output

};
console.log(canConstruct("cba", "bba"));