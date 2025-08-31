class Solution {
  insertionSort(nums) {
    // loops from  0 to length
    for (let i = 0; i < nums.length; i++) {
      let j = i

      // loops from i to 0 in decreasing order until current element is lesser than prev
      while (j >= 0 && nums[j - 1] > nums[j]) {
        // swap current with previous
        [nums[j - 1], nums[j]] = [nums[j], nums[j - 1]]
        j--
      }
    }

    return nums
  }
}

const soln = new Solution()
console.log(soln.insertionSort([7, 4, 1, 5, 3]))

