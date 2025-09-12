/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function(s) {
  let sArr = s.split('').filter(n => !isNaN(n) && n !== '').map(Number)

  let highest = -Infinity
  let secondHighest = -Infinity
  for (let i = 0; i < sArr.length; i++) {

    if (sArr[i] > highest) {
      secondHighest = highest
      highest = sArr[i]
    }

    if (sArr[i] > secondHighest && sArr[i] != highest) {
      secondHighest = sArr[i]
    }
  }

  return secondHighest === -Infinity ? -1 : secondHighest
};
console.log(secondHighest('dfa12321afd'))
