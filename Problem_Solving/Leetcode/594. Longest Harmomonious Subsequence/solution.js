/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
  // Step 1: Sort the array so sliding window can rely on increasing order
  nums = nums.sort((a, b) => a - b);

  // left pointer = start of window
  let left = 0;

  // Store longest harmonious subsequence size
  let maxLen = 0;

  // Step 2: Move the right pointer to grow the window
  for (let right = 1; right < nums.length; right++) {

    // Step 3: If window becomes invalid (difference > 1), shrink from left
    // We keep shrinking until max - min <= 1 again
    while (nums[right] - nums[left] > 1) {
      left++;
    }

    // Step 4: If window is harmonious (difference == 1), update the answer
    if (nums[right] - nums[left] === 1) {
      // right-left+1 gives current window length
      maxLen = Math.max(maxLen, right - left + 1);
    }
  }

  return maxLen;
};

console.log(findLHS([1, 3, 2, 2, 5, 2, 3, 7]))
