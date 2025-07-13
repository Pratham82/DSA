var maxSubArray = function (arr) {
  if (arr.length === 0) return 0
  let currentSum = arr[0]
  let maxSum = arr[0]

  for (let i = 1; i < arr.length; i++) {
    let tempSum = currentSum + arr[i]

    currentSum = tempSum > arr[i] ? tempSum : arr[i]
    maxSum = currentSum > maxSum ? currentSum : maxSum

    console.log({ tempSum, currentEl: arr[i], maxSum })
  }
  return maxSum
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
