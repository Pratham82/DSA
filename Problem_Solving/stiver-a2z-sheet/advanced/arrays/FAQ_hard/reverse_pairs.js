class Solution {
  // reversePairs(nums) {
  //   let N = nums.length
  //   let count = 0
  //
  //   for (let i = 0; i < N; i++) {
  //     for (let j = i + 1; j < N; j++) {
  //       if (nums[i] > nums[j] * 2) {
  //         count++
  //       }
  //     }
  //   }
  //
  //   return count
  // }

  reversePairs(nums) {
    // merge sort
    function mergeSort(nums, left, right) {
      if (left >= right) return 0

      const mid = Math.floor((left + right) / 2)
      let count = 0

      // count left & right halves
      count += mergeSort(nums, left, mid)
      count += mergeSort(nums, mid + 1, right)

      // count cross pairs
      count += countCrossPairs(nums, left, mid, right)

      // merge sorted values
      merge(nums, left, mid, right)

      return count
    }

    // count pairs
    function countCrossPairs(nums, left, mid, right) {
      let count = 0
      let j = mid + 1
      for (let i = left; i <= mid; i++) {
        while (j <= right && nums[i] > 2 * nums[j]) j++
        count += (j - (mid + 1))
      }

      return count
    }

    // merge function
    function merge(nums, left, mid, right) {
      const temp = []
      let i = left, j = mid + 1


      while (i <= mid && j <= right) {
        // nums[i++] is same as below: 
        // temp.push(nums[i]);
        // i = i + 1;
        if (nums[i] <= nums[j]) temp.push(nums[i++])
        else temp.push(nums[j++])
      }

      while (i <= mid) temp.push(nums[i++])
      while (j <= right) temp.push(nums[j++])

      for (let k = left; k <= right; k++) {
        nums[k] = temp[k - left]
      }
    }

    return mergeSort(nums, 0, nums.length - 1)
  }
}

const soln = new Solution()
console.log(soln.reversePairs([6, 4, 1, 2, 7]))
console.log(soln.reversePairs([5, 4, 4, 3, 3]))
