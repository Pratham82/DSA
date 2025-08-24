class Solution {
  NnumbersSum(N) {
    //your code goes here
    if (N === 0) return 0
    return N + this.NnumbersSum(N - 1)
  }

}

const soln = new Solution()
console.log(soln.NnumbersSum(5))


