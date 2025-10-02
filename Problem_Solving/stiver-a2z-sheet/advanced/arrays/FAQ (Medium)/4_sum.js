class Solution {
  fourSum(nums, target) {
    nums = nums.sort((a, b) => a - b)
    let res = []
    let N = nums.length

    for (let i = 0; i < N - 3; i++) {

      if (i > 0 && nums[i] === nums[i - 1]) continue

      for (let j = i + 1; j < N - 2; j++) {

        if (j > i + 1 && nums[j] === nums[j - 1]) continue

        let left = j + 1
        let right = N - 1

        while (left < right) {
          let sum = nums[i] + nums[j] + nums[left] + nums[right]

          if (sum === target) {
            let quadruplet = [nums[i], nums[j], nums[left], nums[right]]
            res.push(quadruplet)

            while (left < right && nums[left] === nums[left + 1]) left++
            while (left < right && nums[right] === nums[right - 1]) right--
            left++
            right--
          } else if (sum < target) {
            left++
          } else {
            right--
          }

        }

      }
    }

    return res
  }
}

const soln = new Solution()
console.log(soln.fourSum([1, -2, 3, 5, 7, 9], 7))
console.log(soln.fourSum([1, 0, -1, 0, -2, 2], 0))
console.log(soln.fourSum([-3, -1, 0, 2, 4, 5], 0))
