class Solution {
  checkPrime(num) {
    //your code goes here
    if (num <= 1) return false

    let divisors = 0

    const isPrime = (num, start) => {
      if (start > num) return

      if (num % start === 0) divisors++

      return isPrime(num, start + 1)
    }

    isPrime(num, 1)

    return divisors === 2
  }
}

const soln = new Solution()
console.log(soln.checkPrime(15))
console.log(soln.checkPrime(5))
console.log(soln.checkPrime(1))
