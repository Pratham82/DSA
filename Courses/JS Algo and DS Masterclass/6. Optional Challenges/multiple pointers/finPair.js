/*
Given an unsorted array and a number n, find if there exists a pair of elements in the array whose difference is n. This function should return true if the pair exists or false if it does not.

findPair([6,1,4,10,2,4], 2) // true
findPair([8,6,2,4,1,0,2,5,13],1) // true
findPair([4,-2,3,10],-6) // true
findPair([6,1,4,10,2,4], 22) // false
findPair([], 0) // false
findPair([5,5], 0) // true
findPair([-4,4], -8) // true
findPair([-4,4], 8) // true
findPair([1,3,4,6],-2) // true
findPair([0,1,3,4,6],-2) // true
findPair([1,2,3], 0) // false
*/

function findPair(arr, target) {
  // create set for storing unique values
  const set = new Set()
  const absTarget = Math.abs(target)
  console.log(arr)

  for (const n of arr) {
    /*
      check in the set if the diff already exist this means the
      current value and the set adds up to the target
    */
    if (set.has(n + absTarget) || set.has(n - absTarget)) {
      return true
    }

    if (absTarget === 0 && set.has(n)) {
      return true // special case for zero difference and duplicates
    }

    // else add the current element to the set
    set.add(n)
  }
  return false
}

// console.log(findPair([6, 1, 4, 10, 2, 4], 2))
// console.log(findPair([8, 6, 2, 4, 1, 0, 2, 5, 13], 1))
console.log(findPair([6, 1, 4, 10, 2, 4], 22))
