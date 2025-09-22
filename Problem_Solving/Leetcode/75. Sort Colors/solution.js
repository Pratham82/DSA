/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  let count_0 = 0
  let count_1 = 0
  let count_2 = 0
  let N = nums.length

  for (let n of nums) {
    if (n === 0) {
      count_0++
    } else if (n === 1) {
      count_1++
    } else {
      count_2++
    }
  }

  for (let i = 0; i < N; i++) {
    if (count_0 > 0) {
      nums[i] = 0
      count_0--
    } else if (count_1 > 0) {
      nums[i] = 1
      count_1--
    } else {
      nums[i] = 2
      count_2--
    }
  }

  return nums

}
