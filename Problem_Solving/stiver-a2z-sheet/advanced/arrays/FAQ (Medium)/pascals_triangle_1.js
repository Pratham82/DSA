class Solution {
  pascalTriangleI(r, c) {
    let res = 1

    // for one based index (minus from the row and columns)
    let rows = r - 1
    let columns = c - 1
    for (let i = 0; i < columns; i++) {
      // formula 
      // res = res * (rows -1) / (i+1)
      res = res * (rows - i) / (i + 1)
    }

    return res
  }
}


const soln = new Solution()
console.log(soln.pascalTriangleI(4, 2))
console.log(soln.pascalTriangleI(5, 3))
