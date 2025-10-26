/**
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function(nums) {
  // mergesort
  function mergeSort(nums, left, right) {
    if (left >= right) return 0

    const mid = Math.floor((left + right) / 2)
    let count = 0

    count += mergeSort(nums, left, mid)
    count += mergeSort(nums, mid + 1, right)

    // count pairs
    count += countPairs(nums, left, mid, right)

    // merge 
    merge(nums, left, mid, right)

    return count

  }
  // count pairs
  function countPairs(nums, left, mid, right) {
    let count = 0
    let j = mid + 1
    for (let i = left; i <= mid; i++) {
      while (j <= right && nums[i] > 2 * nums[j]) j++
      count += (j - (mid + 1))
    }
    return count
  }


  // merge 
  function merge(nums, left, mid, right) {
    let temp = []
    let i = left
    let j = mid + 1

    while (i <= mid && j <= right) {
      if (nums[i] <= nums[j]) temp.push(nums[i++])
      else temp.push(nums[j++])
    }

    // add remaining pairs
    while (i <= mid) temp.push(nums[i++])
    while (j <= right) temp.push(nums[j++])

    // replace with actual array
    for (let k = left; k <= right; k++) {
      nums[k] = temp[k - left]
    }
  }

  return mergeSort(nums, 0, nums.length - 1)
};
