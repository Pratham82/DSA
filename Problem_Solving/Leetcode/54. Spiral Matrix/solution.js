/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  let rows = matrix.length
  let columns = matrix[0].length

  let left = 0, right = columns - 1, top = 0, bottom = rows - 1, res = []

  // RIGHT -> BOTTOM -> LEFT -> UP
  while (left <= right && top <= bottom) {
    // RIGHT : (left -> right) (top)
    for (let i = left; i <= right; i++) {
      res.push(matrix[top][i])
    }
    top++

    // BOTTOM : (top -> bottom) (right)
    for (let i = top; i <= bottom; i++) {
      res.push(matrix[i][right])
    }
    right--

    // LEFT : (right -> left) (bottom)
    // prevent empty indices
    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        res.push(matrix[bottom][i])
      }
      bottom--
    }

    // UP : (bottom -> top) (left)
    // prevent empty indices
    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        res.push(matrix[i][left])
      }
      left++
    }
  }

  return res

};
