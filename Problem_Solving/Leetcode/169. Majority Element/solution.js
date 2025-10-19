/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let dict = {}
  let maxVal = -Infinity, maxKey = -Infinity

  for (let n of nums) {
    dict[n] = dict[n] ? dict[n] + 1 : 1
    if (dict[n] > maxVal) {
      maxVal = dict[n]
      maxKey = n
    }
  }

  return maxKey

};
