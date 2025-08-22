class Solution {
  longestCommonPrefix(strs) {
    // neetcode's solution
    let res = ''

    // loop over first string
    for (let i = 0; i < strs[0].length; i++) {
      // loop over all strings
      for (let s of strs) {
        // check if the current index is not equal to length of the word
        // match every char of the word with first char if not return the combined res
        if (i === s.length || strs[0][i] !== s[i]) {
          return res
        }
      }
      // if matches add the char in res
      res += strs[0][i]

    }
  }

  lcp(strs) {
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
  }


}

const soln = new Solution()
// console.log(soln.longestCommonPrefix(["flower", "flow", "flight"]))
console.log(soln.lcp(["flower", "flow", "flight"]))
