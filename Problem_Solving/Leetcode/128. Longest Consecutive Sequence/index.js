/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {

  const hash = {}
  const set1 = new Set(nums)
  let longest = 0

  // iterate over main array
  for (let n of nums) {
    // check if the left neighbour is not present (so it can be a start of an range)
    if (!set1.has(n - 1)) {
      let currentLength = 0

      // if number found without left neighbour
      // iterate over array till 
      // Count how far the consecutive sequence extends
      while (set1.has(n + currentLength)) {
        currentLength++
      }

      // Track the maximum sequence length

      longest = Math.max(currentLength, longest)
    }
  }

  return longest

};


console.log(longestConsecutive([100, 4, 200, 1, 3, 2]))
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]))
