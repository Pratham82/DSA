class Solution {
  // Attempt 1
  // sortZeroOneTwo(nums) {
  //   let i = 0
  //   let j = 1
  //   while (i < nums.length && j < nums.length) {
  //     if (nums[i] > nums[j]) {
  //       [nums[i], nums[j]] = [nums[j], nums[i]]
  //       i++
  //     }
  //     j++
  //   }
  //
  //   return nums
  // }

  // better apporach
  // sortZeroOneTwo(nums) {
  //   let zeroes_count = 0
  //   let one_count = 0
  //   let two_count = 0
  //
  //   // icrease the counter of 0,1,2s
  //   for (let i = 0; i < nums.length; i++) {
  //     if (nums[i] === 0) {
  //       zeroes_count++
  //     } else if (nums[i] === 1) {
  //       one_count++
  //     } else {
  //       two_count++
  //     }
  //   }
  //
  //   // replace the elements 
  //   for (let i = 0; i < nums.length; i++) {
  //     if (zeroes_count > 0) {
  //       nums[i] = 0
  //       zeroes_count--
  //     } else if (one_count > 0) {
  //       nums[i] = 1
  //       one_count--
  //     } else {
  //       nums[i] = 2
  //     }
  //   }
  //
  //   return nums
  // }


  // optimized
  // Dutch National Flag Algorithm visualization:
  //
  // [ 0 ... low-1 ]   -> all 0s (sorted left side)
  // [ low ... mid-1 ] -> all 1s (sorted middle so far)
  // [ mid ... high ]  -> unknown (to be processed)
  // [ high+1 ... n-1 ]-> all 2s (sorted right side)
  //
  // Pointers:
  // low  -> boundary for 0
  // mid  -> current element
  // high -> boundary for 2
  sortZeroOneTwo(nums) {
    let low = 0
    let mid = 0
    let high = nums.length - 1


    while (mid <= high) {
      if (nums[mid] === 0) {
        // 0 → swap to front (low zone), move low & mid
        [nums[mid], nums[low]] = [nums[low], nums[mid]]
        low++; mid++
      } else if (nums[mid] === 1) {
        // 1 → middle, just move mid
        mid++
      } else {
        // 2 → swap to end (high zone), move high only, high moves left (next 2 goes here)
        [nums[mid], nums[high]] = [nums[high], nums[mid]]
        high--
      }
    }

    return nums

  }
  // simple example
  // 💡 Think of it like cleaning a room:
  // If you see a red shirt (0), throw it in the laundry basket on the left → move left basket forward.
  // If you see a white shirt (1), leave it on the floor (middle) → keep walking.
  // If you see a blue shirt (2), throw it into the basket on the right → move right basket backward.
  //
  // And you just keep sweeping through until everything’s in the right basket.}
}

const soln = new Solution()
console.log(soln.sortZeroOneTwo([1, 0, 2, 1, 0]))
console.log(soln.sortZeroOneTwo([0, 0, 1, 1, 1]))
console.log(soln.sortZeroOneTwo([1, 1, 2, 2, 1]))
console.log(soln.sortZeroOneTwo([2, 0, 1]))
