/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  const reverse = (nums, start, end) => {
    while (start < end) {
      [nums[start], nums[end]] = [nums[end], nums[start]]
      start++
      end--
    }
  }

  let n = nums.length

  // because if the length of k is same then rotation will keep the array at same place
  // Ensure k is within the array length (e.g., rotating by n or any multiple of n results in the same array)
  k = k % n

  // Left rotate: take from front → end (reverse left half, right half, whole array)
  // Right rotate: take from end → front (reverse whole array, left half, right half)

  // reverse the complete array
  reverse(nums, 0, n - 1)

  // reverse left half from  0 to k
  reverse(nums, 0, k - 1)

  // reverse right half from  k to n
  reverse(nums, k, n - 1)
};
