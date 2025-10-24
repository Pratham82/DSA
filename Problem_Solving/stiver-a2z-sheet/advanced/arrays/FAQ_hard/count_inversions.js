class Solution {
  // brute force
  // numberOfInversions(nums) {
  //   let count = 0
  //   let N = nums.length
  //
  //   for (let i = 0; i < N; i++) {
  //     for (let j = i + 1; j < N; j++) {
  //       if (nums[i] > nums[j]) {
  //         count++
  //       }
  //     }
  //   }
  //
  //   return count
  // }

  // optimal
  numberOfInversions(nums) {
    let N = nums.length

    // mergeSort
    function mergeSort(arr, temp, left, right) {
      if (left >= right) return 0

      let mid = Math.floor((left + right) / 2)
      let count = 0

      count += mergeSort(arr, temp, left, mid)
      count += mergeSort(arr, temp, mid + 1, right)
      count += merge(arr, temp, left, mid, right)

      return count
    }

    // merge
    function merge(arr, temp, left, mid, right) {
      let i = left, j = mid + 1, k = left, count = 0

      while (i <= mid && j <= right) {
        if (arr[i] <= arr[j]) {
          temp[k++] = arr[i++]
        } else {
          temp[k++] = arr[j++]
          count += mid - i + 1
        }
      }

      while (i <= mid) temp[k++] = arr[i++]
      while (j <= right) temp[k++] = arr[j++]

      for (let i = left; i <= right; i++) arr[i] = temp[i]

      return count
    }

    const temp = new Array(N)
    return mergeSort(nums, temp, 0, N - 1)
  }



}

const soln = new Solution()
console.log(soln.numberOfInversions([2, 3, 7, 1, 3, 5]))
console.log(soln.numberOfInversions([-10, -5, 6, 11, 15, 17]))
