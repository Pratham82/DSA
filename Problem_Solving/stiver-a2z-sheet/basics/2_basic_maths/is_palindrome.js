class Solution {
  isPalindrome(n) {
    let ogNum = n
    let reversedNumber = 0

    while (n > 0) {
      let rem = n % 10
      reversedNumber *= 10
      reversedNumber += rem
      n = Math.floor(n / 10)
    }
    return reversedNumber === ogNum

  }
}
