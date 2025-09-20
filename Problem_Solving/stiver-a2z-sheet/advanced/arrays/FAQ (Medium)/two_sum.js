class Solution {
  twoSum(nums, target) {
    // create a map for diff (diff between)
    let map = new Map()
    for (let i = 0; i < nums.length; i++) {
      // difference between the given target and current number
      // for eg if target is 10 and current num is 6: diff = 4

      let diff = target - nums[i]
      // We will check if this diff already present is present
      if (map.has(diff)) {
        // return the index of the diff and current index
        return [map.get(diff), i]
      }
      // else store the diff and index as key value pair
      map.set(nums[i], i)
    }

  }
}

const soln = new Solution()
console.log(soln.twoSum([1, 2, 3, 4, 6], 4))
