/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  // brute force
  // moveZeroes(nums) {
  //   let temp = []
  //
  //   for (let i = 0; i < nums.length; i++) {
  //     if (nums[i] !== 0) {
  //       temp.push(nums[i])
  //     }
  //   }
  //
  //   for (let i = 0; i < nums.length; i++) {
  //     if (i < temp.length) {
  //       nums[i] = temp[i]
  //     } else {
  //       nums[i] = 0
  //     }
  //   }
  //
  //   return nums
  // }
  let j = 0

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      [nums[i], nums[j]] = [nums[j], nums[i]]
      j++
    }
  }
  return nums
};
