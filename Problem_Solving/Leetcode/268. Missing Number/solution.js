/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  // optimized - by sum
  let N = nums.length
  let sum = (N * (N + 1)) / 2

  let currentSum = 0
  for (let i = 0; i < N; i++) {
    currentSum += nums[i]
  }
  return sum - currentSum

}
