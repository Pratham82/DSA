/*
Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.

This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.
Examples:

minSubArrayLen([2,3,1,2,4,3], 7) // 2 -> because [4,3] is the smallest subarray
minSubArrayLen([2,1,6,5,4], 9) // 2 -> because [5,4] is the smallest subarray
minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) // 1 -> because [62] is greater than 52
minSubArrayLen([1,4,16,22,5,7,8,9,10],39) // 3
minSubArrayLen([1,4,16,22,5,7,8,9,10],55) // 5
minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) // 2
minSubArrayLen([1,4,16,22,5,7,8,9,10],95) // 0
*/
// function minSubArrayLen(arr, n) {
//   let resArr = []
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i; j < arr.length; j++) {
//       if (arr[i] + arr[j] === n) {
//         resArr.push(arr[i])
//         resArr.push(arr[j])

//         // console.log("arr", arr, "n", n)
//         console.log({ resArr })
//         return resArr.length
//       }
//     }
//   }

//   return 0
// }

// function minSubArrayLen(arr, n) {
//   let l = 0
//   let total = 0
//   let res = Infinity

//   for (let i = 0; i < arr.length; i++) {
//     total += arr[i]
//     while (total >= n) {
//       res = Math.min(res, i - l + 1)
//       total -= arr[l]
//       l++
//     }
//   }
//   return res === Infinity ? Infinity : res
// }

function minSubArrayLen(arr, n) {
  let left = 0
  let total = 0
  let res = Infinity

  for (let right = 0; right < arr.length; right++) {
    total += arr[right]
    console.log({ total })
    while (total >= n) {
      res = Math.min(res, right - left + 1)
      console.log({ res })
      total -= arr[left]
      left++
    }
  }

  return res === Infinity ? 0 : res
}

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7))

// console.log(
//   minSubArrayLen([2, 1, 6, 5, 4], 9) // 2 -> because [5,4] is the smallest subarray
// )

// console.log(
//   minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52) // 1 -> because [62] is greater than 52
// )

// console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55))
