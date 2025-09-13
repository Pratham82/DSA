class Solution {
  findMaxConsecutiveOnes(nums) {
    let maxCount = 0
    let count = 0

    for (let i = 0; i < nums.length; i++) {
      // increase the count when found 1
      if (nums[i] === 1) {
        count++
      }

      // break the count if found 0
      if (nums[i] === 0) {
        count = 0
      }

      // check if the current count is greater than max count
      if (count > maxCount) {
        maxCount = count
      }
    }

    return maxCount
  }
}

const soln = new Solution()
console.log(soln.findMaxConsecutiveOnes([1, 0, 1, 1, 1, 0, 1, 1, 1]))
console.log(soln.findMaxConsecutiveOnes([1, 0, 1, 1, 1, 0, 1, 1, 1, 1]))
