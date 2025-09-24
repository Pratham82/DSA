/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = (nums) => {
  // sort the array
  nums = nums.sort((a, b) => a - b);
  let N = nums.length;

  let res = [];

  // loop over the array
  for (let i = 0; i < N; i++) {
    // skip duplicate i
    // ensures uniqueness for the first element of the triplet
    if (i > 0 && nums[i] === nums[i - 1]) continue

    // run two pointers
    let left = i + 1;
    let right = N - 1;

    while (left < right) {
      // check the sum
      let sum = nums[left] + nums[i] + nums[right]
      // if sum === 0
      if (sum === 0) {
        let triplet = [nums[i], nums[right], nums[left]]
        res.push(triplet)
        // skip duplicates
        //  while moving left to right (if the next element is same then skip it)
        while (left < right && nums[left] === nums[left + 1]) left++
        // while moving right to left (if the prev element is same then skip it)
        while (left < right && nums[right] === nums[right - 1]) right--

        // if no duplicate then just bring both pointers closer
        left++
        right--

      } else if (sum < 0) {
        // move left ahead
        left++
      } else {
        // move right behind (sum > 0)
        right--
      }
    }
  }
  return res
}

