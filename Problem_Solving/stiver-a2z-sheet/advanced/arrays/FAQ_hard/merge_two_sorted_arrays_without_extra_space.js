class Solution {
  // merge(nums1, m, nums2, n) {
  //   // fill 0s till total array length
  //   let N = m + n
  //   let i = 0
  //   while (i < N) {
  //     if (!nums1[i]) {
  //       nums1.push(0)
  //     }
  //     i++
  //   }
  //
  //   let j = 0
  //   while (j < N) {
  //     console.log(nums1[j], nums2[j])
  //     j++
  //   }
  //   return nums1
  // }
  //

  merge(nums1, m, nums2, n) {
    let temp = []
    let i = 0
    let j = 0

    while (i < m && j < n) {
      if (nums1[i] <= nums2[j]) {
        temp.push(nums1[i++])
      } else {
        temp.push(nums2[j++])
      }
    }

    while (i < m) temp.push(nums1[i++])
    while (j < n) temp.push(nums2[j++])

    for (let k = 0; k < m + n; k++) {
      nums1[k] = temp[k]
    }

    return nums1

  }
}

const soln = new Solution()
console.log(soln.merge([-5, -2, 4, 5], 4, [-3, 1, 8], 3))
