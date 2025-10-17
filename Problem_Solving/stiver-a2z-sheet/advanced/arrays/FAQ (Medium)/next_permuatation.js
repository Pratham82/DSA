class Solution {
  // brute
  // nextPermutation(nums) {
  //   const res = []
  //   let ogNums = [...nums]
  //   let N = nums.length
  //   nums = nums.sort((a, b) => a - b)
  //
  //   for (let i = 0; i < N; i++) {
  //     let temp = []
  //     temp.push(nums[i])
  //
  //     for (let j = 0; j < N; j++) {
  //       if (i !== j) {
  //         temp.push(nums[j])
  //       }
  //     }
  //
  //     res.push(temp)
  //   }
  //
  //   for (let i = N - 1; i >= 0; i--) {
  //     let temp = []
  //     temp.push(nums[i])
  //
  //     for (let j = N - 1; j >= 0; j--) {
  //       if (i !== j) {
  //         temp.push(nums[j])
  //       }
  //     }
  //
  //     res.push(temp)
  //   }
  //
  //   let sortedRes = res.sort((a, b) => a[0] - b[0])
  //
  //   let numIndex = sortedRes.findIndex(el => el.every((val, i) => val === ogNums[i]))
  //
  //   return sortedRes[numIndex > N ? 0 : numIndex + 1]
  // }

  // optimized
  // find the break index
  nextPermutation(nums) {
    let N = nums.length
    let idx = -1

    // Find the breakpoint where numbers stop increasing when scanning from the end.
    for (let i = N - 2; i >= 0; i--) {
      if (nums[i] < nums[i + 1]) {
        idx = i
        break
      }
    }
    // check if idx is still -1 then just reverse the array and return
    if (idx === -1) {
      return nums.reverse();
    }
    // find the element which is just greater than the breakpoint
    for (let i = N - 1; i > idx; i--) {
      if (nums[i] > nums[idx]) {
        [nums[i], nums[idx]] = [nums[idx], nums[i]]
        break
      }
    }

    // reverse the remaining array from breakpoint  -> end
    let left = idx + 1
    let right = N - 1
    while (left < right) {
      [nums[left], nums[right]] = [nums[right], nums[left]]
      left++
      right--
    }

    return nums
  }
}

const soln = new Solution()
console.log(soln.nextPermutation([1, 2, 3]))
console.log(soln.nextPermutation([2, 1, 5, 4, 3, 0, 0]))
console.log(soln.nextPermutation([1, 1, 5]))
// console.log(soln.nextPermutation([4, 2, 3]))
// 123, 132, 213, 231, 312, 321
