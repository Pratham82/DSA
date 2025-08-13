class Solution {
  divisors(n) {
    let res = []
    let c = 1
    while (c <= n) {
      if (n % c === 0) {
        res.push(c)
      }
      c++
    }

    return res

  }
}

let soln = new Solution()
console.log(soln.divisors(6))
console.log(soln.divisors(7))
