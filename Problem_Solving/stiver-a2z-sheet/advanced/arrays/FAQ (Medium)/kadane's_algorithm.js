class Solution {
  // maxSubArray(nums) {
  //   let max = -Infinity
  //   let N = nums.length
  //
  //   let sum = (arr) => arr.reduce((acc, val) => acc + val, 0)
  //
  //   for (let i = 0; i < N; i++) {
  //     for (let j = i + 1; j <= N; j++) {
  //       let currentSum = sum(nums.slice(i, j))
  //
  //       if (currentSum > max) {
  //         max = currentSum
  //       }
  //     }
  //   }
  //
  //   return max
  // }

  // optimal
  // maxSubArray(nums) {
  //   let max = -Infinity
  //   let N = nums.length
  //
  //   for (let i = 0; i < N; i++) {
  //     let sum = 0
  //
  //     for (let j = i; j < N; j++) {
  //       sum += nums[j]
  //
  //       max = Math.max(max, sum)
  //     }
  //   }
  //
  //   return max
  // }


  // Kadane's algo
  // maxSubArray(nums) {
  //   let max = -Infinity
  //   let N = nums.length
  //
  //   let currentSum = 0
  //   let arr = []
  //
  //   // loop over the array
  //   for (let i = 0; i < N; i++) {
  //     currentSum += nums[i]
  //
  //     // check if the current sum is greater than max 
  //     if (currentSum > max) {
  //       max = currentSum
  //     }
  //
  //     // reset current sum if the sum is less than 0
  //     if (currentSum < 0) {
  //       currentSum = 0
  //     }
  //   }
  //   return max
  // }

  maxSubArray(nums) {
    let N = nums.length;
    let max = -Infinity


    let currentSum = 0
    for (let i = 0; i < N; i++) {
      currentSum = Math.max(nums[i], currentSum + nums[i])

      max = Math.max(currentSum, max)
    }

    return max
  }
}

const soln = new Solution()
// console.log(soln.maxSubArray([2, 3, 5, -2, 7, -4]))
console.log(soln.maxSubArray([-2, -3, -7, -2, -10, -4]))
