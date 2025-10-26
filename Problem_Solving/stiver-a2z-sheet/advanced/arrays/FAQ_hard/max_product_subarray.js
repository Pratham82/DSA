class Solution {
  // maxProduct(nums) {
  //   let n = nums.length
  //   let maxprod = -infinity
  //   let res = []
  //
  //   for (let i = 0; i < n; i++) {
  //     for (let j = i; j < n; j++) {
  //       let currentprod = nums.slice(i, j + 1).reduce((acc, val) => acc * val)
  //       if (currentprod > maxprod) {
  //         maxprod = currentprod
  //       }
  //     }
  //   }
  //
  //   return maxprod
  // }
  //

  // optimal
  maxProduct(nums) {
    let N = nums.length
    let prefix = 1
    let suffix = 1
    let maxProd = -Infinity

    // iterate from 0 -> N (check prefix)
    // keep multiplying
    for (let i = 0; i < N; i++) {
      // if zero found reset prefix/suffix
      if (prefix === 0) prefix = 1
      if (suffix === 0) suffix = 1

      prefix *= nums[i]

      // iterate from N-1 -> 0 (check suffix)
      suffix *= nums[N - i - 1]

      maxProd = Math.max(maxProd, prefix, suffix)
    }

    return maxProd
  }
}

const soln = new Solution()
console.log(soln.maxProduct([4, 5, 3, 7, 1, 2]))
