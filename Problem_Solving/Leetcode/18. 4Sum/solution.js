/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  // sort the array for two pointers
  nums = nums.sort((a, b) => a - b)
  let N = nums.length
  let res = []

  // loop over from 0 -> length - 3
  for (let i = 0; i < N - 3; i++) {
    // check if the element is already iterated if it is then skip
    if (i > 0 && nums[i] === nums[i - 1]) continue

    // loop over from 0 -> length - 2
    for (let j = i + 1; j < N - 2; j++) {

      // check if the element is already iterated if it is then skip
      if (j > i + 1 && nums[j] === nums[j - 1]) continue

      // intiate pointers
      let left = j + 1
      let right = N - 1

      while (left < right) {
        const sum = nums[i] + nums[j] + nums[right] + nums[left]
        // check if sum is equal to target
        if (sum === target) {
          const quad = [nums[i], nums[j], nums[right], nums[left]]
          res.push(quad)

          // check if the next element in left iteration is same if same then move left pointer ahead
          while (left < right && nums[left] === nums[left + 1]) left++
          // check if the prev element in right iteration is same if same then move right pointer behind
          while (left < right && nums[right] === nums[right - 1]) right--

          // squeeze in the pointers
          left++
          right--
          // if sum < targert, increase left pointer since arr is in ascending order
        } else if (sum < target) {
          left++
          // else decrease from right
        } else {
          right--
        }
      }
    }
  }

  return res

};
