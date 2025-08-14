class Solution {
  // arraySortedOrNot(arr, n) {
  //   const sotedArr = [...arr].sort()
  //   console.log(sotedArr, arr)
  //   return JSON.stringify(sotedArr) == JSON.stringify(arr)
  // }

  // arraySortedOrNot(arr, n) {
  //   let isSorted = true
  //
  //   for (let i = 0; i < arr.length; i++) {
  //     let max = Math.max(arr[i], arr[i + 1])
  //     if (max === arr[i]) {
  //       return false
  //     }
  //   }
  //
  //   return isSorted
  // }

  arraySortedOrNot(arr, n) {
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < arr[i - 1]) {
        return false
      }
    }
    return true
  }



}


const sol = new Solution()
console.log(sol.arraySortedOrNot([5, 4, 6, 7, 8], 5))
console.log(sol.arraySortedOrNot([1, 2, 3, 4, 5], 5))
