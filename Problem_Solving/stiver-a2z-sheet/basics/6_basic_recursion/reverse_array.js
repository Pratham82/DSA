class Solution {
  reverseArray(nums) {
    //your code goe shere
    const swap = (left, right, nums) => {
      if (left > right) return

      [nums[left], nums[right]] = [nums[right], nums[left]]

      return swap(left + 1, right - 1, nums)
    }

    swap(0, nums.length - 1, nums)

    return nums
  }
}

const soln = new Solution()
console.log(soln.reverseArray([1, 2, 3, 4, 5]))
