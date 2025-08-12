class Solution {
  countOddDigit(n) {
    let count = 0
    let num = n

    while (num > 0) {
      let rem = num % 10
      if (rem % 2 !== 0) {
        count++
      }
      num = Math.floor(num / 10)
    }

    return count
  }
}

const sln = new Solution()

console.log(sln.countOddDigit(247))
console.log(sln.countOddDigit(500))
console.log(sln.countOddDigit(6909))
