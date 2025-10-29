/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function(grid) {
  nums = grid.flat()
  let repeat = -1
  let missing = -1
  let N = nums.length

  // find sum of first n natural numbers
  let SN = (N * (N + 1)) / 2

  // find sum of first n natural numbers (squares)
  let S2N = (N * (N + 1) * (2 * N + 1)) / 6

  // calcualte current sum and sum of squares of array
  let S = 0, S2 = 0
  for (let i = 0; i < N; i++) {
    S += nums[i]
    S2 += nums[i] * nums[i]
  }

  // get the difference from current N sum & N square sums
  let diffSum = S - SN
  let diffSquare = S2 - S2N

  // calculate X (repeating) + Y (missing)
  // calculate x + y =  (x^2 - y^2 ) / (x-y)
  diffSquare = diffSquare / diffSum

  // calculate x & y from x +y, x-y
  // x = ((x+y) + (x-y))/2
  // y = x - (x -y)
  let x = (diffSum + diffSquare) / 2

  let y = x - diffSum

  return [Math.floor(x), Math.floor(y)]

};
