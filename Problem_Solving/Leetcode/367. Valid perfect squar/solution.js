/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
  let left = 1
  let right = num

  while (left <= right) {
    let mid = Math.floor((left + right) / 2)
    // get square
    let sq = mid * mid

    // check if square is equal to target
    if (sq === num) {
      return true
    }
    // follow classic binary search
    if (sq < num) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }

  return false
};

console.log(isPerfectSquare(16))
console.log(isPerfectSquare(14))
