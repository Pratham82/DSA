// Write a funciton which accepts an array of integers and a number called n.
// The function should calculate the max sum of n consecutive elements of an array

// brute force
function maxSubarraySum(arr, n) {
  let maxSum = 0
  for (let i = 0; i < arr.length - n; i++) {
    let tempSum = arr.slice(i, i + n).reduce((a, b) => a + b, 0)
    if (tempSum > maxSum) {
      maxSum = tempSum
    }
  }
  return maxSum
}

function maxSubarraySumWithouBuiltIn(arr, n) {
  let maxSum = 0
  for (let i = 0; i < arr.length - n; i++) {
    let tempSum = 0
    for (let j = 0; j < n; j++) {
      tempSum += arr[i + j]
    }
    if (tempSum > maxSum) {
      maxSum = tempSum
    }
  }
  return maxSum
}

// max subarray with sliding window

function maximumSubArrayWithSlidingWindow(arr, n) {
  // 1. get the sum of 1st n elemens
  // 2. keep that as maxSum
  // 3. Initiate tempSum with maxSum
  // 4. loop over from n to end and remove starting element of an array and add next element
  // 5. compare between 2 and return max

  if (n > arr.length) return null

  let tempSum = 0
  let maxSum = 0

  for (let i = 0; i < n; i++) {
    maxSum += arr[i]
  }

  tempSum = maxSum

  for (let j = n; j < arr.length; j++) {
    tempSum -= arr[j - n]
    tempSum += arr[j]

    if (tempSum > maxSum) {
      maxSum = tempSum
    }
  }
  return maxSum
}

// console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2))
// console.log(maxSubarraySumWithouBuiltIn([1, 2, 5, 2, 8, 1, 5], 2))
console.log(maximumSubArrayWithSlidingWindow([1, 2, 5, 2, 8, 1, 5], 2))
