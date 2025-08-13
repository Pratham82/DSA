class Solution {
  isPrime(n) {
    let count = 0
    for (let i = 1; i <= n; i++) {
      if (n % i === 0) {
        count++
      }
    }
    return count === 2
  }
}

const soln = new Solution()
console.log(soln.isPrime(6))
console.log(soln.isPrime(5))
console.log(soln.isPrime(4))

