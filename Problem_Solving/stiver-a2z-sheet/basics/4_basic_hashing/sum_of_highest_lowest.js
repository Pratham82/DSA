class Solution {
  sumHighestAndLowestFrequency(nums) {
    let dict = {}
    for (let i = 0; i < nums.length; i++) {
      if (dict[nums[i]]) {
        dict[nums[i]] += 1
      } else {
        dict[nums[i]] = 1
      }
    }

    let high = 0
    let low = Infinity

    for (let val of Object.values(dict)) {
      if (val > high) {
        high = val
      }

      if (val < low) {
        low = val
      }
    }

    return high + low
  }
}


const soln = new Solution()

console.log(soln.sumHighestAndLowestFrequency([4, 4, 5, 5, 6]))
console.log(soln.sumHighestAndLowestFrequency([2, 4, 3, 2, 5, 4, 10, 9]))
console.log(soln.sumHighestAndLowestFrequency([10, 9, 7, 7, 8, 8, 8]))
console.log(soln.sumHighestAndLowestFrequency([1, 2, 3, 4, 5]))
