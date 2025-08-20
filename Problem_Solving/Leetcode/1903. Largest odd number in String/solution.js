/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function(s) {

  // iterate from back to front
  let i
  let index = -1

  for (i = s.length - 1; i >= 0; i--) {
    if ((s[i] - 0) % 2 === 1) {
      // set found odd index (end index of number)
      index = i
      break
    }
  }


  // find the start index (start of the number non zero)
  i = 0
  while (i <= index && (s[i] - '0') === 0) i++

  // return start and end index with slice
  return s.slice(i, index + 1)


};
