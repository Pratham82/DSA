/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  nums1 = nums1.sort((a, b) => a - b)
  nums2 = nums2.sort((a, b) => a - b)

  let i = 0
  let j = 0
  let intersection = []

  function checkIfduplicate(arr, n) {
    return (arr.length === 0 || arr[arr.length - 1] !== n)
  }

  while (i < nums1.length && j < nums2.length) {
    // check if botht elements are same
    if (nums1[i] === nums2[j]) {
      if (checkIfduplicate(intersection, nums1[i])) {
        intersection.push(nums1[i])
      }
      i++
      j++

      // if i smaller
    } else if (nums1[i] < nums2[j]) {
      i++

      // if j is smaller
    } else {
      j++
    }
  }

  return intersection
};

console.log(intersection([1, 2, 2, 1], [2, 2]))
console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]))
