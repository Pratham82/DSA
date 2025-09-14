class Solution {
  // rotateArrayByOne(nums) {
  //   let first = nums[0]
  //
  //   for (let i = 0; i < nums.length; i++) {
  //     if (i < nums.length - 1) {
  //       nums[i] = nums[i + 1]
  //     }
  //
  //     if (i === nums.length - 1) {
  //       nums[i] = first
  //     }
  //   }
  //
  //   return nums
  // }

  // optimized version
  rotateArrayByOne(nums) {
    let first = nums[0]

    for (let i = 0; i < nums.length - 1; i++) {
      nums[i] = nums[i + 1]
    }

    nums[nums.length - 1] = first

    return nums
  }

}

const soln = new Solution()
console.log(soln.rotateArrayByOne([1, 2, 3, 4, 5]))
console.log(soln.rotateArrayByOne([-1, 0, 3, 6]))
