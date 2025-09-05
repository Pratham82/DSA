class Solution {

  merge(arr, low, mid, high) {
    let temp = []
    let left = low
    let right = mid + 1

    while (left <= mid && right <= high) {
      if (arr[left] <= arr[right]) {
        temp.push(arr[left])
        left++
      } else {
        temp.push(arr[right])
        right++
      }
    }

    while (left <= mid) {
      temp.push(arr[left])
      left++
    }

    while (right <= high) {
      temp.push(arr[right])
      right++
    }

    for (let i = 0; i < temp.length; i++) {
      // offset with low to put back in sorted manner
      arr[low + i] = temp[i]
    }
  }


  mergeSortHelper(arr, start = 0, end = arr.length - 1) {
    if (start >= end) return

    const mid = Math.floor((start + end) / 2)

    // sort left
    this.mergeSortHelper(arr, start, mid)

    // sort right
    this.mergeSortHelper(arr, mid + 1, end)

    return this.merge(arr, start, mid, end)
  }

  mergeSort(arr) {
    let n = arr.length - 1
    this.mergeSortHelper(arr, 0, n)

    return arr
  }
}

const soln = new Solution()
console.log(soln.mergeSort([7, 4, 1, 5, 3]))
