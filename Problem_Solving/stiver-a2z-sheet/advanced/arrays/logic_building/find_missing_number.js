class Solution {
  missingNumber(nums) {
    // brute force
    // let sortedArr = nums.sort();
    // let n = nums.length
    //
    // for (let i = 0; i <= n; i++) {
    //   if (i !== sortedArr[i]) {
    //     return i
    //   }
    // }


    // better
    // let N = nums.length
    // // create an array from 0 - N and populate with 0
    // let frequencies = new Array(N + 1).fill(0)
    //
    // // loop over the nums and update the frequencies
    // for (let num of nums) {
    //   frequencies[num]++
    // }
    //
    // // now loop from 0 to N check if there's any zero in freq,
    // // this means the number does not exist
    // for (let i = 0; i <= N; i++) {
    //   if (frequencies[i] === 0) {
    //     return i
    //   }
    // }
    //
    // return -1

    // optimized - by sum
    let N = nums.length
    let sum = (N * (N + 1)) / 2

    let currentSum = 0
    for (let i = 0; i < N; i++) {
      currentSum += nums[i]
    }
    return sum - currentSum

  }
}

const soln = new Solution()
console.log(soln.missingNumber([0, 2, 3, 1, 4]))
console.log(soln.missingNumber([0, 1, 2, 4]))
// console.log(soln.missingNumber([0, 1, 2, 4, 5, 6]))
