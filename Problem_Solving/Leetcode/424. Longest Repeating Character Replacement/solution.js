/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
  let count = {}
  let res = 0
  let left = 0
  let maxFreq = 0

  for (let right = 0; right < s.length; right++) {
    let char = s[right]

    // keep updating frequency
    count[char] = (count[char] || 0) + 1

    // keep checking max frequent
    maxFreq = Math.max(maxFreq, count[char])

    // check if current window is valid

    // total window len - max freq > k
    while ((right - left + 1) - maxFreq > k) {

      // update the counter and move pointer
      count[s[left]] -= 1
      // shrink from left
      left++
    }

    res = Math.max(res, right - left + 1)

  }

  return res
};



console.log(characterReplacement('AABABBA', 1))
