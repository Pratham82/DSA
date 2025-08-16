class Solution {
  reverseString(s) {
    //your code goes here
    let left = 0
    let right = s.length - 1
    while (left < right) {

      let temp = s[left]
      s[left] = s[right]
      s[right] = temp

      left++
      right--
    }
    return s
  }
}

const soln = new Solution()
console.log(soln.reverseString(["h", "e", "l", "l", "o"]))
