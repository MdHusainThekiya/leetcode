/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {

  if (s.length < t.length) {
    return "";
  } else if (s.length === t.length && s === t) {
    return s;
  }
  
  let windowLen = t.length;
  let tMap = {};
  let sMap = {};
  let leftP = 0;

  for(let i = 0; i < t.length; i++) {
    tMap[t[i]] = (tMap[t[i]] || 0) + 1;
  }

  function checkIsMatch() {
    let isMatch = true;
    for(let key in tMap) {
      if (!sMap[key] || sMap[key] < tMap[key]) {
        isMatch = false;
        break;
      }
    }
    return isMatch;
  }

  let count = 0;

  while(windowLen !== (s.length + 1)) {
    
    count++;
    console.log('[76_minimum_window_substring]::OK:['+ count +']:');

    for(let rightP = 0; rightP < s.length; rightP++) {

      sMap[s[rightP]] = (sMap[s[rightP]] || 0) + 1;

      if (rightP < (windowLen - 1)) {
        continue;
      }

      if(checkIsMatch()) {
        return s.substring(leftP, rightP + 1);
      }

      sMap[s[leftP]] = sMap[s[leftP]] - 1;
      leftP++;

    }
    windowLen++;
    sMap = {};
    leftP = 0;
  }

  return "";
};

// console.log(minWindow("aaabcdcdcdd", "aaab"));