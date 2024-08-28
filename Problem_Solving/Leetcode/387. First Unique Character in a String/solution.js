/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  const counter = {};
  for (let i = 0; i < s.length; i++) {
    if (counter[s[i]]) {
      counter[s[i]] = {
        count: counter[s[i]].count + 1,
        charLocation: i,
      };
    } else {
      counter[s[i]] = {
        count: 1,
        charLocation: i,
      };
    }
  }

  const keys = Object.entries(counter);
  for (const [char, { count = 0, charLocation = 0 }] of keys) {
    if (count === 1) {
      return charLocation;
    }
  }
  return -1;
};
