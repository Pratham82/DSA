class Solution {
  GCD(a, b) {

    const getGCD = (a, b) => {
      if (a === 0) {
        return b;
      }
      return getGCD(b % a, a);
    }

    return getGCD(a, b)
  };

}


const sln = new Solution()
console.log(sln.GCD(4, 6))
