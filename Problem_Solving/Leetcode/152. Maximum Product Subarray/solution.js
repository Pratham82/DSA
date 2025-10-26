/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  let N = nums.length
  let suffix = 1
  let prefix = 1
  let maxProduct = -Infinity

  // iterate from 0 -> N (prefix) keep product value in prefix (from fronte)
  // iterate from N-1 -> 0 (suffix) keep product value in suffix (from back)
  // reset prefix/suffix to 0 if product is 0
  // calculate max

  for (let i = 0; i < N; i++) {
    if (prefix === 0) prefix = 1
    if (suffix === 0) suffix = 1

    prefix *= nums[i]
    suffix *= nums[N - 1 - i]

    maxProduct = Math.max(maxProduct, prefix, suffix)
  }

  return maxProduct
};
