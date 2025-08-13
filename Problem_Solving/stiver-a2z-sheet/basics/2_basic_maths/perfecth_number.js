class Solution {
  isPerfect(n) {
    // get perfect divisors
    let sumOfPerfectDivisors = 0
    for (let i = 1; i < n; i++) {
      if (n % i === 0) {
        sumOfPerfectDivisors += i
      }
    }
    // check if the sum of the divisors is also same as the number istself
    return sumOfPerfectDivisors === n
  }
}

const soln = new Solution()
console.log(soln.isPerfect(6))
console.log(soln.isPerfect(4))
