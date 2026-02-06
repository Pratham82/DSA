/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function(s) {
  // let strSet = new Set(s.split(''))
  let strSet = new Set()

  let left = 0
  let res = 0

  for (let right = 0; right < s.length; right++) {
    // if right element found in the set remove the left most element and keep deleting
    // and increase the left pointer
    while (strSet.has(s[right])) {
      strSet.delete(s[left])
      left++
    }

    // add the current element
    strSet.add(s[right])

    // calculate max and compare with current max
    res = Math.max(res, right - left + 1)

  }
  return res

};

console.log(lengthOfLongestSubstring("abcabcbb"))

