class Solution {
  largestDigit(n) {

    let max = 0

    while (n > 0) {
      let rem = n % 10
      if (rem > max) {
        max = rem
      }

      n = Math.floor(n / 10)
    }

  }
}
