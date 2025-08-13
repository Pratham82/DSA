class Solution {
  LCM(n1, n2) {
    const getGCD = (a, b) => {
      if (a === 0) {
        return b;
      }
      return getGCD(b % a, a);
    }

    return (n1 * n2) / getGCD(n1, n2)
  }
}

const soln = new Solution()
console.log(soln.LCM(3, 5))
