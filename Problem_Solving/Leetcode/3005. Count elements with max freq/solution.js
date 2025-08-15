/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function(nums) {
  let dict = {}
  for (let i = 0; i < nums.length; i++) {
    if (dict[nums[i]]) {
      dict[nums[i]] += 1
    } else {
      dict[nums[i]] = 1
    }
  }

  // find max
  let maxCount = 0

  for (let key in dict) {
    if (dict[key] > maxCount) {
      maxCount = dict[key]
      maxKey = key
    }
  }

  let maxSum = 0
  // loop over and check if max then add to the count
  for (let [key, val] of Object.entries(dict)) {
    if (val === maxCount) {
      maxSum += maxCount
    }
  }

  return maxSum

};

console.log(maxFrequencyElements([1, 2, 2, 3, 1, 4]))
