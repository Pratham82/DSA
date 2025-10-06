class Solution {
  rotateMatrix(matrix) {
    const res = []
    const N = matrix.length

    // rotate and store in new array
    for (let i = 0; i < N; i++) {
      let newArr = []
      for (let j = 0; j < N; j++) {
        newArr.unshift(matrix[j][i])
      }
      res.push(newArr)
    }


    // replce with existing array
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        matrix[i][j] = res[i][j]
      }
    }

    return matrix
  }
}

const soln = new Solution()
console.log(soln.rotateMatrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))
