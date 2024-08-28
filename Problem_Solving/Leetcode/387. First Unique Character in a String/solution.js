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

const firstUniqCharOptimized = (s) => {
  let counterMap = new Map();
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (counterMap.has(char)) {
      counterMap.set(char, { count: counterMap.get(char).count + 1, index: i });
    } else {
      counterMap.set(char, { count: 1, index: i });
    }
  }

  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (counterMap.get(char).count === 1) {
      return i;
    }
  }
  return -1;
};

console.log(firstUniqCharOptimized("leetcode"));
console.log(firstUniqCharOptimized("aabb"));
