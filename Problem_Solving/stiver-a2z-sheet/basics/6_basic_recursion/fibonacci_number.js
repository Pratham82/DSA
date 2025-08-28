class Solution {
  fib(n) {
    //your code goes here
    if (n === 0) return 0
    if (n === 1) return 1

    return this.fib(n - 1) + this.fib(n - 2)
  }
}

const soln = new Solution()
console.log(soln.fib(2))
