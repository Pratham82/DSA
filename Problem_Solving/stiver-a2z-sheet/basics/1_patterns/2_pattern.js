class Solution {
  pattern2(n) {
    for (let i = 0; i < n; i++) {
      let row = ''
      for (let j = 0; j <= i; j++) {
        row += `${j}`
      }
      console.log(row)
    }
  }
}

const sln = new Solution()
sln.pattern2(4)
