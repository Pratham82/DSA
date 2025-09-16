class Solution {
  removeDuplicates(nums) {
    // brute force
    // let set1 = new Set()
    // for (let num of nums) {
    //   set1.add(num)
    // }
    //
    // let k = set1.size
    //
    // let j = 0
    // for (let val of set1) {
    //   nums[j++] = val
    // }
    //
    // return k

    // optimized
    // initiate slow pointer
    let j = 0

    for (let i = 1; i < nums.length; i++) {
      if (nums[i] !== nums[j]) {
        console.log({ j, i })
        // update the slow pointer ahead
        j++

        // replace the prev value with the current value
        // place the unique number at new position
        nums[j] = nums[i]

        console.log({ j, i, msg: 'after' })
      }
    }

    // return the total count of unique elements
    return j + 1
  }
}

const soln = new Solution()
console.log(soln.removeDuplicates([0, 0, 3, 3, 5, 6]))
