class Solution {
  arraySum(nums) {
    // base case
    if (nums.length === 0) {
      return 0
    }

    // add removed n from the start and 
    return nums.shift() + this.arraySum(nums)
  }
} 
