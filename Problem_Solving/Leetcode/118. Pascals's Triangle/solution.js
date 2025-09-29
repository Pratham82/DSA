/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  let res = []

  for (let i = 0; i < numRows; i++) {
    // fill new array with 1s
    let currentRow = new Array(i + 1).fill(1)

    // update inner values (inner row, excluding boundaries)
    for (let j = 1; j < i; j++) {
      currentRow[j] = res[i - 1][j - 1] + res[i - 1][j]
    }

    res.push(currentRow)
  }

  return res
};
