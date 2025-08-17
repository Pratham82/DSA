class Solution {
  sanitize(s) {
    return s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
  }

  reverseString(s) {
    let arr = this.sanitize(s).split('')
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
      let temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;

      left++;
      right--;
    }
    return arr.join('');

  }

  bruetPalindromeCheck(s) {
    // return this.sanitize(s) === this.reverseString(s)
  }


  palindromeCheck(s) {
    let str = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
    let left = 0
    let right = str.length - 1

    while (left < right) {
      if (str[left] !== str[right]) return false
      left++
      right--
    }
    return true
  }
}

const soln = new Solution()
console.log(soln.palindromeCheck('hannah'))
console.log(soln.palindromeCheck("A man, a plan, a canal: Panama"))
