/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {

  let left = 0
  let right = nums.length - 1

  while (left < right) {
    // find mid
    let mid = Math.floor((left + right) / 2)

    // make mid even, so that since every pair starts at even
    if (mid % 2 === 1) mid--

    // if pair is valid then change left with current mid +2
    if (nums[mid] === nums[mid + 1]) {
      left = mid + 2
      // if pair not valid change right to mid
    } else {
      right = mid
    }

  }

  // after all the replacements above we will have only remaining value as the result which is not pair
  return nums[left]
};


console.log(singleNonDuplicate([1, 1, 2, 3, 3, 4, 4, 8, 8]))
