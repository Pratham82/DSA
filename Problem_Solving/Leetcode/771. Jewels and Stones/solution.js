/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
// brute force
var numJewelsInStones = function (jewels, stones) {
  let stoneCounter = {};
  for (let i = 0; i < jewels.length; i++) {
    for (let j = 0; j < stones.length; j++) {
      // compare jewel ad stone
      if (jewels[i] === stones[j]) {
        // check if the jewel is inside the stone and increse count
        if (stoneCounter[jewels[i]]) {
          stoneCounter[jewels[i]] += 1;
        } else {
          stoneCounter[jewels[i]] = 1;
        }
      }
    }
  }
  const sum =
    Object.values(stoneCounter).length > 0
      ? Object.values(stoneCounter).reduce((a, b) => a + b)
      : 0;
  return sum;
};

// optmized
var numJewelsInStones = function (jewels, stones) {
  let stoneCounter = new Set(jewels);
  let counter = 0;
  for (let stone of stones) {
    if (stoneCounter.has(stone)) {
      counter++;
    }
  }
  return counter;
};

console.log(numJewelsInStones("aA", "aAAbbbb"));
console.log(numJewelsInStones("z", "ZZ"));
