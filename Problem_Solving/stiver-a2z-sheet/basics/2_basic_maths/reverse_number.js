class Solution {
  reverseNumber(n) {

    let reversedNumber = 0

    while (n > 0) {
      let rem = n % 10
      reversedNumber *= 10
      reversedNumber += rem
      n = Math.floor(n / 10)
    }
    return reversedNumber

  }
}

const sln = new Solution()

console.log(sln.reverseNumber(345))
console.log(sln.reverseNumber(25))
