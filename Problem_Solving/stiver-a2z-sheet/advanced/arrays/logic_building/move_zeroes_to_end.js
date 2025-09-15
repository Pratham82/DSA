class Solution {
  // brute force
  // moveZeroes(nums) {
  //   let temp = []
  //
  //   for (let i = 0; i < nums.length; i++) {
  //     if (nums[i] !== 0) {
  //       temp.push(nums[i])
  //     }
  //   }
  //
  //   for (let i = 0; i < nums.length; i++) {
  //     if (i < temp.length) {
  //       nums[i] = temp[i]
  //     } else {
  //       nums[i] = 0
  //     }
  //   }
  //
  //   return nums
  // }

  // optimized
  moveZeroes(nums) {
    // initiate j pointer with 0
    let j = 0

    for (let i = 0; i < nums.length; i++) {
      // as soon as non zero number found replace that number with j's index
      if (nums[i] !== 0) {
        [nums[i], nums[j]] = [nums[j], nums[i]]

        // increase j's pointer
        j++
      }
    }

    // return updated array
    return nums
  }
}

const soln = new Solution()
console.log(soln.moveZeroes([0, 1, 4, 0, 5, 2]))
