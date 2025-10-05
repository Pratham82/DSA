class Solution {
  generateRow(row) {
    let ans = 1
    let ansRow = []

    // push the fist element in this triangle
    ansRow.push(ans)

    for (let col = 1; col < row; col++) {
      // formula: ans = ans * (row - col) / col
      // C(n, k) = C(n, k-1) * (n - k + 1) / k
      ans = ans * (row - col)
      ans = ans / col
      ansRow.push(ans)
    }

    return ansRow
  }

  pascalTriangleIII(n) {
    let finalRes = []

    for (let i = 1; i <= n; i++) {
      finalRes.push(this.generateRow(i))
    }

    return finalRes
  }
}

const soln = new Solution()
console.log(soln.pascalTriangleIII(4))
