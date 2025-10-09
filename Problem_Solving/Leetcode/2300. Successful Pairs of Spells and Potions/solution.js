/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function(spells, potions, success) {
  // brute
  // let res = []
  //
  // for (let s of spells) {
  //   let currentPair = 0
  //   for (let i = 0; i < potions.length; i++) {
  //     if (s * potions[i] >= success) {
  //       currentPair++
  //     }
  //   }
  //
  //   res.push(currentPair)
  // }
  //
  // return res

  // optimized
  potions = potions.sort((a, b) => a - b)
  let res = []


  for (let spell of spells) {

    let left = 0
    let right = potions.length - 1
    let index = potions.length

    while (left <= right) {
      // find mid
      let mid = Math.floor((left + right) / 2)

      // check if the current spell * mid >= success
      if (spell * potions[mid] >= success) {

        // set correct mid in the index
        index = mid

        // check if the success is available on the left (shirnk from right)
        right = mid - 1
      } else {
        // if not found increase the counter from left (shrink from left)
        left = mid + 1
      }
    }

    // if the valid index is found remove it from total length
    // if there's no valid index it will be 0 (because potions.length - index(which is total length))
    res.push(potions.length - index)
  }

  return res
};

console.log(successfulPairs([5, 1, 3], [1, 2, 3, 4, 5], 7))
console.log(successfulPairs([3, 1, 2], [8, 1, 5], 16))
