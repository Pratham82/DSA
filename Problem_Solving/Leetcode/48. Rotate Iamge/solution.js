/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  let res = []
  let N = matrix.length

  // rotate and save the array
  for (let i = 0; i < N; i++) {
    let currentRow = []
    for (let j = 0; j < N; j++) {
      currentRow.unshift(matrix[j][i])
    }
    res.push(currentRow)
  }


  // store it in the new array
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      matrix[i][j] = res[i][j]
    }
  }

  return matrix
};
