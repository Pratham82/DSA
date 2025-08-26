class Solution {
  // arraySum(nums) {
  //   // base case
  //   if (nums.length === 0) {
  //     return 0
  //   }
  //
  //   // add removed n from the start and 
  //   return nums.shift() + this.arraySum(nums)
  // }


  // with helper function
  sum(i, nums) {
    if (i >= nums.length) {
      return 0;
    }
    return nums[i] + this.sum(i + 1, nums);
  }
  arraySum(nums) {
    return this.sum(0, nums);
  }



  // parameterized soln
  arrSumParamterized(i, nums) {
    if (i >= nums.length) {
      return 0
    }
    return nums[i] + this.arrSumParamterized(i + 1, nums)
  }
}

const soln = new Solution()

console.log(soln.arrSumParamterized(0, [1, 2, 3, 4]))
console.log(soln.arraySum([1, 2, 3, 4]))
