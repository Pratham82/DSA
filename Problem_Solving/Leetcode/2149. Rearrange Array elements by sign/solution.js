/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
  let N = nums.length
  let res = new Array(N).fill(0)

  let pos = 0
  let neg = 1

  for (let n of nums) {
    if (n > 0) {
      res[pos] = n
      pos += 2
    } else {
      res[neg] = n
      neg += 2
    }
  }

  return res

};
