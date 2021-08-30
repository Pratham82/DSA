// Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist.

const arr1 = [-3, -2, -1, 0, 1, 2, 3]
const arr2 = [-2, 0, 1, 3]
const arr3 = [1, 2, 3]
const arr4 = [-4, -3, -2, -1, 0, 1, 2, 5]

/**
 * Naive approach
 * Time complexity: O(n^2)
 * @param {*} arr
 * @returns [number,number] | undefined
 * @author Prathamesh Mali
 */
// function sumZero(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === 0) {
//         return [arr[i], arr[j]]
//       }
//     }
//   }
//   return undefined
// }

/**
 * Using multiple pointers method
 * Time complexity  O(n)
 * Space complexity  O(1)
 * @param {*} arr
 * @returns [number,number] | undefined
 * @author Prathamesh Mali
 */
function sumZeroMP(arr) {
  let start = 0
  let end = arr.length - 1
  // console.log(start, end)
  while (end > start) {
    let sum = arr[start] + arr[end]
    if (sum === 0) {
      return [arr[start], arr[end]]
    } else if (sum > 0) {
      end--
    } else {
      start++
    }
  }
}

console.log(sumZeroMP(arr1))
console.log(sumZeroMP(arr2))
console.log(sumZeroMP(arr3))
console.log(sumZeroMP(arr4))
