// Write a function called same which accepts two arrays the function should  return two arrays. The function should  return true fi every value in the array has its corresponding value squared int the second array the frequency of  values must be the same

/**
 * My Approach
 * time complexity: O(n)
 *
 * @param {*} arr1
 * @param {*} arr2
 * @returns boolean
 * @author Prathamesh Mali
 *
 */
function same(arr1, arr2) {
  let new1 = arr1.sort()
  let new2 = arr2.sort()
  for (let i = 0; i < new1.length; i++) {
    if (new2[i] !== Math.pow(new1[i], 2)) {
      return false
    }
  }
  return true
}
console.log(same([1, 2, 3], [4, 1, 9]))
console.log(same([1, 2, 3], [1, 9]))
console.log(same([1, 2, 1], [4, 4, 1]))
console.log(same([1, 2, 3, 2], [9, 1, 4, 4]))
console.log(same([1, 2, 3, 2], []))
