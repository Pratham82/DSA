class Solution {
  isArmstrong(n) {
    let sum = 0
    let nLength = String(n).length
    let ogNum = n
    let digit = 0

    while (n > 0) {
      digit = n % 10
      sum += Math.pow(digit, nLength)
      console.log(sum)
      n = Math.floor(n / 10)
    }
    return sum === ogNum
  }
}


const soln = new Solution()
// console.log(soln.isArmstrong(123))
console.log(soln.isArmstrong(153))





