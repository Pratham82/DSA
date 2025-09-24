class Solution {
  // brute force
  // threeSum(nums) {
  //   // create a resulting set, which will have unique array(as a string)
  //   let resSet = new Set();
  //   let N = nums.length;
  //
  //   // loop over elements, 3 loops i,j,k incrementally
  //   for (let i = 0; i < N; i++) {
  //     for (let j = i + 1; j < N; j++) {
  //       for (let k = j + 1; k < N; k++) {
  //         // found triplet
  //         if (nums[i] + nums[j] + nums[k] === 0) {
  //           // sort the array so if new array comes with duplicates, it will be ruled out
  //           let triplet = [nums[i], nums[j], nums[k]].sort((a, b) => a - b);
  //
  //           // store the sorted array as a string in the set
  //           resSet.add(JSON.stringify(triplet));
  //         }
  //       }
  //     }
  //   }
  //
  //   // return the triplets, but parse the string form array to normal array
  //   return Array.from(resSet).map(JSON.parse);
  // }

  // better approach
  threeSum(nums) {
    let tripletSet = new Set()
    let N = nums.length;

    for (let i = 0; i < N; i++) {
      // create a temp set
      let tempSet = new Set()

      for (let j = i + 1; j < N; j++) {
        // create third num
        let thirdNum = -(nums[i] + nums[j])

        // check if the sum of -(i+j)
        if (tempSet.has(thirdNum)) {
          // create a final array and sort, for avoiding duplicacy
          let temp = [nums[i], thirdNum, nums[j]].sort((a, b) => a - b)


          // the final sorted array and store it as an string
          tripletSet.add(JSON.stringify(temp))
        }

        // add the current variable j to the tempSet to avoiding duplicates
        tempSet.add(nums[j])
      }
    }

    return Array.from(tripletSet).map(JSON.parse)
  }


  // optimal solution
  threeSum(nums) {
    // sort the array
    nums = nums.sort((a, b) => a - b)
    let N = nums.length

    let res = []
    for (let i = 0; i < N; i++) {
      // check for duplicates of i
      if (i > 0 && nums[i] === nums[i - 1]) continue

      // two pointers: one starting just after i, and the other at the end
      let left = i + 1
      let right = N - 1

      // run a loop until left does not cross the right pointer
      while (left < right) {

        // check sum === 0
        let sum = nums[left] + nums[i] + nums[right]
        if (sum === 0) {
          res.push([nums[i], nums[left], nums[right]])

          // skip duplicates for left pointer (move forward if next is same)
          while (left < right && nums[left] === nums[left + 1]) left++;
          // skip duplicates for right pointer (move backward if prev is same)
          while (left < right && nums[right] === nums[right - 1]) right--;

          left++
          right--

        } else if (sum < 0) {
          // need a bigger sum → move left pointer forward
          left++
        } else {
          // need a smaller sum → move right pointer backward
          right--
        }
      }
    }
    return res
  }
}

const soln = new Solution()
console.log(soln.threeSum([2, -2, 0, 3, -3, 5]))
console.log(soln.threeSum([2, -1, -1, 3, -1]))
