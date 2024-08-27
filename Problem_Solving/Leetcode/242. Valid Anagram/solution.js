/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const lookUpTable = {};
  for (let i = 0; i < s.length; i++) {
    if (lookUpTable[s[i]]) {
      lookUpTable[s[i]] += 1;
    } else {
      lookUpTable[s[i]] = 1;
    }
  }

  for (let i = 0; i < t.length; i++) {
    if (!lookUpTable[t[i]]) {
      return false;
    } else {
      lookUpTable[t[i]] -= 1;
    }
  }
  return true;
};
