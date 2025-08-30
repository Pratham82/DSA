class Solution {
  bubbleSort(nums) {
    // loop over first
    for (let i = 0; i < nums.length - 1; i++) {
      // swapped initialization
      let swapped = false

      // inner loop till n.length - i - 1
      for (let j = 0; j < nums.length - i - 1; j++) {

        // console.log({ j, end: nums.length - i - 1 })
        if (nums[j] > nums[j + 1]) {
          // perfrom swap 
          [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]]
          swapped = true
        }
      }
      // optimization if array is already sorted (optional)
      if (swapped === false) break
    }
    return nums
  }
}

const soln = new Solution()
console.log(soln.bubbleSort([7, 4, 1, 5, 3]))
