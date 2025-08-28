class Solution {
  addDigits(num) {
    //your code goes here
    if (num < 10) return num

    let recursiveSum = (num) => {
      let n = Math.abs(num)
      let sum = 0

      while (n > 0) {
        sum += n % 10
        n = Math.floor(n / 10)
      }
      return sum
    }

    return this.addDigits(recursiveSum(num))
  }
}


const soln = new Solution()
console.log(soln.addDigits(529))
