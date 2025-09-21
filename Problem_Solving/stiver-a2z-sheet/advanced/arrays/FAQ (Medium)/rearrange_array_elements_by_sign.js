class Solution {
  // rearrangeArray(nums) {
  //   let neg = []
  //   let pos = []
  //   let res = []
  //
  //   for (let num of nums) {
  //     if (num > 0) {
  //       pos.push(num)
  //     } else {
  //       neg.push(num)
  //     }
  //   }
  //
  //   for (let i = 0; i < pos.length; i++) {
  //     res.push(pos[i])
  //     res.push(neg[i])
  //   }
  //
  //   return res
  // }

  // optimized 1
  // rearrangeArray(nums) {
  //   let N = nums.length
  //   let res = new Array(N).fill(0)
  //
  //   let posPointer = 0
  //   let negPointer = 1
  //   for (let i = 0; i < N; i++) {
  //     if (nums[i] > 0) {
  //       res[posPointer] = nums[i]
  //       posPointer += 2
  //     } else {
  //       res[negPointer] = nums[i]
  //       negPointer += 2
  //     }
  //   }
  //
  //   return res
  // }

  // optimizd 2 but messes up the order
  // rearrangeArray(nums) {
  //   let N = nums.length
  //
  //   let i = 0
  //   let j = 1
  //
  //   while (i < N && j < N) {
  //     if (nums[i] > 0) {
  //       i += 2
  //     } else if (nums[j] < 0) {
  //       j += 2
  //     } else {
  //       [nums[i], nums[j]] = [nums[j], nums[i]]
  //
  //       i += 2
  //       j += 2
  //
  //     }
  //   }
  //
  //   return nums
  // }


  rearrangeArray(nums) {
    let N = nums.length
    let res = new Array(N).fill(0)

    let i = 0
    let j = 1

    for (let n of nums) {
      if (n > 0) {
        res[i] = n
        i += 2
      } else {
        res[j] = n
        j += 2
      }
    }

    return res
  }
}

const soln = new Solution()
console.log(soln.rearrangeArray([2, 4, 5, -1, -3, -4]))
