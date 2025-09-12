class Solution {
  // brute force
  // secondLargestElement(nums) {
  //   let n = nums.length
  //   if (n < 2) {
  //     return -1
  //   }
  //
  //   let sortedArr = nums.sort((a, b) => a - b)
  //   let largest = sortedArr[n - 1]
  //   let secondLargest = -1
  //
  //   for (let i = n - 2; i >= 0; i--) {
  //     if (nums[i] < largest) {
  //       secondLargest = nums[i]
  //       return secondLargest
  //     }
  //   }
  //
  //   return secondLargest
  // }

  // first and second pass
  // secondLargestElement(nums) {
  //   let n = nums.length
  //
  //   let largest = -Infinity
  //   let secondLarest = -Infinity
  //
  //
  //   if (n < 2) {
  //     return -1
  //   }
  //
  //
  //   // first pass
  //   for (let i = 0; i < n; i++) {
  //     if (nums[i] > largest) {
  //       largest = nums[i]
  //     }
  //   }
  //
  //   // second pass
  //   for (let i = 0; i < n; i++) {
  //     if (nums[i] > secondLarest && nums[i] < largest) {
  //       secondLarest = nums[i]
  //     }
  //   }
  //
  //   return secondLarest === -Infinity ? -1 : secondLarest
  // }
  //



  // optimal solution
  secondLargestElement(nums) {
    let n = nums.length

    if (n < 2) {
      return -1
    }


    let largest = -Infinity
    let secondLargest = -Infinity

    for (let i = 0; i < n; i++) {
      // if found largest
      if (nums[i] > largest) {
        // set the second larget to the prev largest
        secondLargest = largest

        // update the larget with the currne tmax
        largest = nums[i]
      }

      // check if the current num is greater than second largest and not equal to largest
      if (nums[i] > secondLargest && nums[i] != largest) {
        secondLargest = nums[i]
      }
    }

    return secondLargest === -Infinity ? -1 : secondLargest
  }
}

const soln = new Solution()
console.log(soln.secondLargestElement([8, 8, 7, 6, 5]))
console.log(soln.secondLargestElement([-1, -2, -3, -4]))
console.log(soln.secondLargestElement([0, 0, 0]))
console.log(soln.secondLargestElement([3, 2, 1, 4]))
// console.log(soln.secondLargestElement([1, 2, 3, 5]))

