class Solution {
  palindromeCheck(s) {
    //your code goes here
    const reverse = (s) => {
      const rev = (left, right, s) => {
        if (left > right) return

        [s[right], s[left]] = [s[left], s[right]]

        return rev(left + 1, right - 1, s)
      }

      rev(0, s.length - 1, s)

      return s.join('')
    }

    const reversed = reverse(s.split(''))
    return reversed === s
  }
}

const soln = new Solution()

console.log(soln.palindromeCheck('hannah'))
console.log(soln.palindromeCheck('aabbaaa'))
