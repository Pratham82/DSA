/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  // brute force
  // let max = 0
  // let N = height.length
  // for (let i = 0; i < N; i++) {
  //   for (let j = i + 1; j < N; j++) {
  //     // find area
  //     let area = Math.min(height[i], height[j]) * (j - i)
  //     if (area > max) {
  //       max = area
  //     }
  //   }
  // }
  // return max

  // optimized

  let maxArea = 0
  let N = height.length

  let left = 0
  let right = N - 1

  // run loop from left to right
  while (left < right) {

    // calculate the current area
    let currentArea = Math.min(height[left], height[right]) * (right - left)

    // set the current max area
    maxArea = Math.max(maxArea, currentArea)

    // if the left pointer is lower, increase from left
    if (height[left] < height[right]) {
      left++
    } else {
      // else move in and decrease from right
      right--
    }
  }

  return maxArea

};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))
