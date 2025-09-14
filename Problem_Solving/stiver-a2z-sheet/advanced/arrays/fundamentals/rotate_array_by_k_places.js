class Solution {

  // rotateArray(nums, k) {
  //   let n = nums.length
  //   k = k % n
  //   let temp = []
  //
  //
  //   // take out the first k elements from array
  //   for (let i = 0; i < n; i++) {
  //     temp.push(nums[i])
  //   }
  //
  //   // start from k till end shift the array
  //   for (let i = k; i < n; i++) {
  //     nums[i - k] = nums[i]
  //   }
  //
  //
  //   // put back the elements which are taken from the start to the end
  //   for (let i = 0; i < k; i++) {
  //     nums[n - k + i] = temp[i]
  //   }
  //
  //   return nums
  // }

  reverseArray(nums, start, end) {
    while (start < end) {
      [nums[start], nums[end]] = [nums[end], nums[start]]
      start++
      end--
    }
  }

  // optimized
  rotateArray(nums, k) {
    let n = nums.length
    k = k % n

    this.reverseArray(nums, 0, k - 1)
    this.reverseArray(nums, k, n - 1)
    this.reverseArray(nums, 0, n - 1)


    return nums

  }
}

const soln = new Solution()
// console.log(soln.rotateArray([1, 2, 3, 4, 5, 6], 2))
console.log(soln.rotateArray([1, 2, 3, 4, 5, 6], 3))
// console.log(soln.rotateArray([-1, -100, 3, 99], 2))
// console.log(soln.rotateArray([1, 2, 3, 4, 5, 6, 7], 3))
// console.log(soln.rotateArray([1, 2, 3, 4, 5, 6, 7], 8))
