class Solution {
  primeUptoN(n) {
    function isPrime(n) {
      let count = 0
      for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
          count++
        }
      }
      return count === 2
    }

    let i = 1
    let res = 0
    while (i <= n) {
      if (isPrime(i)) {
        res++
      }
      i++
    }

    return res
  }
}


let soln = new Solution()

console.log(soln.primeUptoN(6))
console.log(soln.primeUptoN(10))
