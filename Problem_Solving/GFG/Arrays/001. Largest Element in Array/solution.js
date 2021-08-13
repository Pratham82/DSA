function largest(arr, n) {
  let max = 0
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i]
    }
  }
  return max
}

console.log(largest([12, 34, 54, 11, 32, 455, 2322, 21, 345], 0))
