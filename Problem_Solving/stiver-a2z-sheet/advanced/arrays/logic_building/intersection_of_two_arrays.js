class Solution {
  intersectionArray(nums1, nums2) {
    let i = 0;
    let j = 0;
    let intersection = [];

    while (i < nums1.length && j < nums2.length) {
      // check if elements are same
      if (nums1[i] === nums2[j]) {
        // push the element in the resulting array
        intersection.push(nums1[i]);
        // increment both the pointers
        i++;
        j++;
        // if element i < j
      } else if (nums1[i] < nums2[j]) {
        i++;
        // if element j < i
      } else {
        j++;
      }
    }

    return intersection;
  }
}

