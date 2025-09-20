class Solution {
  // brute force 1
  // leaders(nums) {
  //   let leaders = []
  //
  //   for (let i = 0; i < nums.length; i++) {
  //     for (let j = i + 1; j < nums.length; j++) {
  //       if (nums[j] >= nums[i]) {
  //         break
  //       } else {
  //         if (leaders.length === 0 || leaders[leaders.length - 1] !== nums[i])
  //           leaders.push(nums[i])
  //       }
  //     }
  //   }
  //
  //   leaders.push(nums[nums.length - 1])
  //
  //   return leaders
  // }

  // brute force 2
  // leaders(nums) {
  //   let leaders = []
  //
  //   // outer loop which will run through the array
  //   for (let i = 0; i < nums.length; i++) {
  //     // initiate a leader flag
  //     let isLeader = true
  //
  //     // inner loop which will run from current element to the right and end
  //     for (let j = i + 1; j < nums.length; j++) {
  //       // if any number found which is bigger than the current element
  //       // break out of the loop and set the flag to false
  //       if (nums[j] >= nums[i]) {
  //         isLeader = false
  //         break
  //       }
  //     }
  //
  //     // if the leader flag is still true, then we can push that element in the resulting array
  //     if (isLeader) {
  //       leaders.push(nums[i])
  //     }
  //   }
  //   return leaders
  // }

  // optimized
  // approach : do the back traversal and put the max el and put it in new array
  leaders(nums) {

    let leaders = []
    // so that we can handle the negative numbers to
    let max = -Infinity

    // iterate from the back to the front
    for (let i = nums.length - 1; i >= 0; i--) {
      // if current num> max:  put the max in the leaders
      // if the current number is greater than max change max
      if (nums[i] > max) {
        leaders.unshift(nums[i])
        max = nums[i]
      }
    }

    return leaders

  }
}

const soln = new Solution()
console.log(soln.leaders([1, 2, 5, 3, 1, 2]))
console.log(soln.leaders([-3, 4, 5, 1, -4, -5]))
