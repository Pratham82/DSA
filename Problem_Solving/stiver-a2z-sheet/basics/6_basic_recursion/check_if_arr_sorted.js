class Solution {
  isSorted(nums) {
    //your code goes here
    const sort = (arr, i) => {
      if (i >= arr.length) return true

      if (arr[i] > arr[i + 1]) {
        return false
      }
      return sort(arr, i + 1)
    }
    return sort(nums, 0)
  }
}

const soln = new Solution()
console.log(soln.isSorted([1, 2, 3, 4, 6]))
console.log(soln.isSorted([1, 2, 9, 4, 6]))
