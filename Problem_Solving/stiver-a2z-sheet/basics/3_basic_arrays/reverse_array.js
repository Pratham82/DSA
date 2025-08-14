class Solution {
  reverse(arr, n) {
    let res = []
    while (n > 0) {
      res.push(arr[n - 1])
      n--
    }
    for (let i = 0; i < arr.length; i++) {
      arr[i] = res[i]
    }
    return
  }
}

const sln = new Solution()
console.log(sln.reverse([1, 2, 3, 4, 5], 5))
console.log(sln.reverse([1, 2, 1, 1, 5, 1], 6))
