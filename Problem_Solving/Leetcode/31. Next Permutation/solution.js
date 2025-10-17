/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
  let N = nums.length;
  let idx = -1;

  // find the breakpoint where decreasing order stops
  // N-2 -> 0
  for (let i = N - 2; i >= 0; i--) {
    if (nums[i] < nums[i + 1]) {
      idx = i;
      break;
    }
  }

  // if there's no breakpoint, that means everything already in descending order from right -> left
  // so next possible will be the smallest permutation i.e reverse of the current
  if (idx === -1) {
    return nums.reverse();
  }

  // find the next largest element in the breakpoint and swap it with current index
  // N -1 -> idx
  for (let i = N - 1; i > idx; i--) {
    if (nums[i] > nums[idx]) {
      [nums[i], nums[idx]] = [nums[idx], nums[i]];
      break;
    }
  }

  // reverse the right half(just after breakpoint) of the array in ascending order
  let left = idx + 1;
  let right = N - 1;

  while (left < right) {
    [nums[left], nums[right]] = [nums[right], nums[left]];
    left++;
    right--;
  }

  return nums;
};
