class Solution {
  // brute force
  // findMissingRepeatingNumbers(nums) {
  //   let repeat = 0
  //   let missing = 0
  //   let N = nums.length
  //
  //   for (let i = 1; i <= N; i++) {
  //
  //     let count = 0
  //     for (let j = 0; j < N; j++) {
  //       if (nums[j] === i) {
  //         count++
  //       }
  //     }
  //     if (count === 2) {
  //       repeat = i
  //     } else if (count === 0) {
  //       missing = i
  //     }
  //   }
  //
  //   return [repeat, missing]
  // }

  // better
  // findMissingRepeatingNumbers(nums) {
  //   let repeat = -1
  //   let missing = -1
  //   let N = nums.length
  //   let hashArr = new Array(N + 1).fill(0)
  //
  //   for (let n of nums) {
  //     hashArr[n]++
  //   }
  //
  //   for (let i = 1; i <= N; i++) {
  //     if (hashArr[i] === 2) {
  //       repeat = i
  //     } else if (hashArr[i] === 0) {
  //       missing = i
  //     }
  //   }
  //
  //   return [repeat, missing]
  // }

  // optimal
  findMissingRepeatingNumbers(nums) {
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
  }
}


const soln = new Solution()
console.log(soln.findMissingRepeatingNumbers([1, 2, 3, 6, 7, 5, 7]))
// console.log(soln.findMissingRepeatingNumbers([6, 5, 7, 1, 8, 6, 4, 3, 2]))
// console.log(soln.findMissingRepeatingNumbers([3, 5, 4, 1, 1]))
