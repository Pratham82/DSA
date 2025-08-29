class Solution {
  selectionSort(nums) {
    for (let i = 0; i < nums.length; i++) {
      let minIndex = i
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[j] < nums[minIndex]) {
          minIndex = j
        }
      }

      // swap
      let temp = nums[i]
      nums[i] = nums[minIndex]
      nums[minIndex] = temp

      // cleaner swap
      // [nums[i], nums[minIndex]] = [nums[minIndex], nums[i]]
    }
    return nums
  }
}

const soln = new Solution()
console.log(soln.selectionSort([7, 4, 1, 5, 3]))
