class Solution {
  majorityElementTwo(nums) {
    let dict = {}
    let N = nums.length
    let resN = Math.floor(N / 3)
    let res = []

    for (let n of nums) {
      dict[n] = dict[n] ? dict[n] + 1 : 1
      if (dict[n] > resN && !res.includes(n)) {
        res.push(n)
      }
    }

    return res
  }
}

const soln = new Solution()
console.log(soln.majorityElementTwo([1, 2, 1, 1, 3, 2, 2, 1, 1, 1, 2, 2, 2]))
