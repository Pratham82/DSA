class Solution {
  search(nums, target) {
    let left = 0
    let right = nums.length - 1

    while (left <= right) {
      let mid = Math.floor((left + right) / 2)

      if (nums[mid] === target) {
        return mid
      } else if (nums[mid] < target) {
        left++
      } else {
        right--
      }
    }

    return -1
  }
}

const soln = new Solution()

console.log(soln.search([-1, 0, 3, 5, 9, 12], 9))
