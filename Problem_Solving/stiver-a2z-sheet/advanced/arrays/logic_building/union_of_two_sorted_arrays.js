class Solution {
  unionArray(nums1, nums2) {
    // brute force
    // let set = new Set()
    // let newArr = []
    //
    // for (let n of nums1) {
    //   set.add(n)
    // }
    //
    // for (let n of nums2) {
    //   set.add(n)
    // }
    // console.log(set)
    //
    // newArr = Array.from(set).sort((a, b) => a - b)
    //
    // return newArr

    // optimized
    // let i = 0
    // let j = 0
    // let union = []
    //
    // while (i < nums1.length && j < nums2.length) {
    //   // if i < j
    //   if (nums1[i] <= nums2[j]) {
    //     if (union.length === 0 || union[union.length - 1] !== nums1[i]) {
    //       union.push(nums1[i])
    //     }
    //     i++
    //     // j < i
    //   } else {
    //     if (union.length === 0 || union[union.length - 1] !== nums2[j]) {
    //       union.push(nums2[j])
    //     }
    //     j++
    //   }
    // }
    //
    // // push remaining elements of i if any present
    // while (i < nums1.length) {
    //   if (union.length === 0 || union[union.length - 1] !== nums1[i]) {
    //     union.push(nums1[i])
    //   }
    //   i++
    // }
    // // push remaining elements of j if any present
    // while (j < nums2.length) {
    //   if (union.length === 0 || union[union.length - 1] !== nums2[j]) {
    //     union.push(nums2[j])
    //   }
    //   j++
    // }
    //
    // return union

    // optimized
    // with helper function
    let i = 0
    let j = 0
    let n1 = nums1.length
    let n2 = nums2.length
    let union = []

    function checkIfDuplicate(arr, element) {
      return (arr.length === 0 || arr[arr.length - 1] !== element)
    }

    while (i < n1 && j < n2) {
      // if i < j
      if (nums1[i] <= nums2[j]) {
        if (checkIfDuplicate(union, nums1[i])) {
          union.push(nums1[i])
        }
        i++
        // j < i
      } else {
        if (checkIfDuplicate(union, nums2[j])) {
          union.push(nums2[j])
        }
        j++
      }
    }

    // push remaining elements of i
    while (i < n1) {
      if (union, nums1[i]) {
        union.push(nums1[i])
      }
      i++
    }
    // push remaining elements of j
    while (j < n2) {
      if (union, nums2[j]) {
        union.push(nums2[j])
      }
      j++
    }

    return union
  }
}

const soln = new Solution()
console.log(soln.unionArray([1, 2, 3, 4, 5], [1, 2, 7]))

