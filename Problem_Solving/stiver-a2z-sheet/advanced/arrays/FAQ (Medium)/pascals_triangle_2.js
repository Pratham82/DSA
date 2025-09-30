class Solution {
  pascalTriangleII(r) {
    let res = []

    for (let i = 0; i < r; i++) {

      let currentRow = new Array(i + 1).fill(1)

      for (let j = 1; j < i; j++) {
        currentRow[j] = res[i - 1][j - 1] + res[i - 1][j]
      }

      res.push(currentRow)
    }

    return res[r - 1]

  }
}

const soln = new Solution()
console.log(soln.pascalTriangleII(4))
