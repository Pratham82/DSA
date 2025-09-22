/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var sortColors = function(nums) {
//   let count_0 = 0
//   let count_1 = 0
//   let count_2 = 0
//   let N = nums.length
//
//   for (let n of nums) {
//     if (n === 0) {
//       count_0++
//     } else if (n === 1) {
//       count_1++
//     } else {
//       count_2++
//     }
//   }
//
//   for (let i = 0; i < N; i++) {
//     if (count_0 > 0) {
//       nums[i] = 0
//       count_0--
//     } else if (count_1 > 0) {
//       nums[i] = 1
//       count_1--
//     } else {
//       nums[i] = 2
//       count_2--
//     }
//   }
//
//   return nums
// }

// optimal with dutch flag algo
var sortColors = function(nums) {
  let low = 0
  let mid = 0
  let high = nums.length - 1

  while (mid <= high) {
    // check 0: swap with low
    if (nums[mid] === 0) {
      [nums[mid], nums[low]] = [nums[low], nums[mid]]
      low++
      mid++
      // check 1: do not swap, increment mid pointer
    } else if (nums[mid] === 1) {
      mid++
      // check 2: swap with high, decrement high
    } else {
      [nums[mid], nums[high]] = [nums[high], nums[mid]]
      high--
    }
  }

  return nums
}
