/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
const shuffle = (nums, n) => {
  let result = []
  let count = 0
  for (let i = 0; i < nums.length; i++) {
    count++
    result.push(nums[i], nums[n + count - 1])
    if (result.length === nums.length) return result
  }
}
