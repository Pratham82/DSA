/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
  let N = nums.length
  let res = new Array(N).fill(0)

  let i = 0
  let j = 1

  for (let n of nums) {
    if (n > 0) {
      res[i] = n
      i += 2
    } else {
      res[j] = n
      j += 2
    }
  }

  return res

};
