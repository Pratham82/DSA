class Solution {
  mostFrequentElement(nums) {
    let dict = {}
    for (let i = 0; i < nums.length; i++) {
      if (dict[nums[i]]) {
        dict[nums[i]] += 1
      } else {
        dict[nums[i]] = 1
      }
    }

    let maxKey = null
    let maxCount = 0

    for (let key in dict) {
      if (dict[key] > maxCount) {
        maxCount = dict[key]
        maxKey = key
      }
    }
    return maxKey
  }
}

const soln = new Solution()
console.log(soln.mostFrequentElement([4, 4, 5, 5, 6]))
console.log(soln.mostFrequentElement([2, 4, 3, 2, 5, 4]))
