/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (strs.length === 0) return

  // sort the string
  strs.sort()

  // get first and last string
  let res = ''
  let first = strs[0]
  let last = strs[strs.length - 1]

  // loop till min of last and first 
  for (let i = 0; i < Math.min(first.length, last.length); i++) {
    // break if any char doesn't match
    if (first[i] !== last[i]) {
      return res
    }

    // append char to res on every match
    res += first[i]
  }
  return res
};
