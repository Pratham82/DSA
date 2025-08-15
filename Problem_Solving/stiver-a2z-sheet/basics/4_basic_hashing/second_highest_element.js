class Solution {
  secondMostFrequentElement(nums) {
    let dict = {}
    for (let i = 0; i < nums.length; i++) {
      if (dict[nums[i]]) {
        dict[nums[i]] += 1
      } else {
        dict[nums[i]] = 1
      }
    }

    let firstMaxKey = -1
    let firstMaxCount = 0

    let secondMaxKey = -1
    let secondMaxCount = 0

    for (let [key, val] of Object.entries(dict)) {
      if (val > firstMaxCount) {
        // if the value is greater than main max
        // set the main max to second
        secondMaxCount = firstMaxCount
        secondMaxKey = firstMaxKey

        // change the current max to first
        firstMaxCount = val
        firstMaxKey = key


        // if max is greater than second max and less than first max
      } else if (val > secondMaxCount && val < firstMaxCount) {
        secondMaxCount = val
        secondMaxKey = key
      }
    }
    return secondMaxKey
  }
}
const soln = new Solution()
console.log(soln.secondMostFrequentElement([4, 4, 5, 5, 6]))
console.log(soln.secondMostFrequentElement([2, 4, 3, 2, 5, 4]))
console.log(soln.secondMostFrequentElement([1]))
