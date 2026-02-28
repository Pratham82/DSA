class Solution {
  lowerBound(nums, x) {
    let left = 0
    let right = nums.length - 1
    let res = nums.length

    while (left <= right) {
      let mid = Math.floor((left + right) / 2)

      // we keep finding the first index which fits the condition 
      if (nums[mid] >= x) {
        // found the first valid value
        res = mid

        // keep going left to find even smaller index which fits the condition
        right = mid - 1
      } else {
        left = mid + 1
      }
    }

    return res
  }
}

const soln = new Solution()

console.log(soln.lowerBound([3, 5, 8, 15, 19], 9))
console.log(soln.lowerBound([-58210, 52968, 57654, 84387], 89401))
console.log(soln.lowerBound([-49049, 12215, 14963, 74220, 91021], 89353))

