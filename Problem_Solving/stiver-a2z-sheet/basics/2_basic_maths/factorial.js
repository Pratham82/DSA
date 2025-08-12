class Solution {
  factorial(n) {
    let start = 1
    let sum = 1
    while (start <= n) {
      sum *= start
      start++
      // console.log(start)
    }
    return sum
  }
}

const soln = new Solution()
console.log(soln.factorial(5))

