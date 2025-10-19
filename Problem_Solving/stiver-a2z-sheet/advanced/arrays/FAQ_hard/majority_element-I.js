
class Solution {
  majorityElement(nums) {

    let dict = {}
    let maxVal = -Infinity, maxKey = -Infinity

    for (let n of nums) {
      dict[n] = dict[n] ? dict[n] + 1 : 1
      if (dict[n] > maxVal) {
        maxVal = dict[n]
        maxKey = n
      }
    }

    return maxKey
  }
}


const soln = new Solution()
console.log(soln.majorityElement([7, 0, 0, 1, 7, 7, 2, 7, 7]))

console.log(soln.majorityElement([2, 2, 1, 1, 1, 2, 2]))
