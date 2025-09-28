class Solution {
  spiralOrder(matrix) {
    // my apporach
    // let N = matrix.length
    // let res = []
    // for (let i = 0; i < N; i++) {
    //   //1. if first row input first row
    //   //2. else put in last elements
    //   if (i === 0) {
    //     res.push(matrix[i])
    //   } else if (i > 0) {
    //     // put in the last element from the matrix
    //     let lastElement = matrix[i].length - 1
    //     res.push(matrix[i][lastElement])
    //     for (let j = 1; j < N; j++) {
    //       console.log(matrix[j])
    //     }
    //   }
    // }



    /*
     * top  [1, 2, 3]  right
     *      [4, 5, 6]
     * left [7, 8, 9]  bottom
     */

    /*

          Columns →

          0   1   2

Rows 0   [1,  2,  3]   ← top = 0
     1   [4,  5,  6]
     2   [7,  8,  9]   ← bottom = 2
          ↑       ↑
   left = 0      right = 2

    */

    // correct apporach
    let rows = matrix.length

    // number of columns
    let columns = matrix[0].length

    // intialize all corners
    let left = 0, right = columns - 1, top = 0, bottom = rows - 1, res = []


    /* Algo for matrix 
     * 1. Loop until left <= right & top  <= bottom
     * 2. Right(left -> right) -> bottom (top -> bottom) ->  left (right -> left) -> top (left  -> top)
     * 3. Always go RIGHT → DOWN → LEFT → UP. (After each move, shrink the wall you just walked.)
     * */

    while (left <= right && top <= bottom) {
      // RIGHT (left -> right)
      for (let i = left; i <= right; i++) {
        // row
        res.push(matrix[top][i])
      }
      // top moves down so increase column
      top++

      // BOTTOM (top -> bottom) 
      for (let i = top; i <= bottom; i++) {
        // column
        res.push(matrix[i][right])
      }
      // right move inwards so decrease
      right--


      // prevents re-traversing / overflow when going LEFT.
      if (top <= bottom) {
        // LEFT (right -> left)
        for (let i = right; i >= left; i--) {
          // row
          res.push(matrix[bottom][i])
        }
        // bottom moves up so decrease
        bottom--
      }


      // prevents re-traversing / overflow when going UP.
      if (left <= right) {
        // TOP (bottom -> top)
        for (let i = bottom; i >= top; i--) {
          // column
          res.push(matrix[i][left])
        }
        // left move inwards so increase left
        left++
      }
    }

    return res
  }
}


let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
const soln = new Solution()
console.log(soln.spiralOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))
