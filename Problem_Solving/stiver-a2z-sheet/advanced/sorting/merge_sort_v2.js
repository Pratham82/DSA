
// mergeSort helper
function mergeSort(nums, left, right) {
  // base case (single element | invalid range)
  if (left >= right) return
  // find mid of an array
  const mid = Math.floor((left + right) / 2)

  // * Step 1
  // run the function recursively 
  // left(start) -> mid
  mergeSort(nums, left, mid)

  // mid -> right(end)
  mergeSort(nums, mid + 1, right)

  // * Step 2
  // merge 
  merge(nums, left, mid, right)

  return nums
}

// merge function (combines two sorted halves)
function merge(nums, left, mid, right) {
  // init i with left and j with mid, and temp array
  let i = left, j = mid + 1, temp = []

  // merge sorted elements
  while (i <= mid && j <= right) {
    // temp.push(nums[i++]) is same as temp.push(nums[i]); i = i + 1;
    if (nums[i] <= nums[j]) temp.push(nums[i++])
    else temp.push(nums[j++])
  }

  // add remaining elements in the array (because halves can be of different length)
  // left half
  while (i <= mid) temp.push(nums[i++])
  // right half
  while (j <= right) temp.push(nums[j++])

  // copy merged elements back from temp to the actual array
  for (let k = left; k <= right; k++) {
    nums[k] = temp[k - left]
  }
}

let nums = [5, 4, 6, 1, 7, 8, 9, 2, 3]

console.log(mergeSort(nums, 0, nums.length - 1))
