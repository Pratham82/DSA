class Solution {
  partition(arr, low, high) {
    // chose random index from high and low
    let randomIndex = low + Math.floor(Math.random() * (high - low + 1));

    // swap low and random
    [arr[low], arr[randomIndex]] = [arr[randomIndex], arr[low]]

    let pivot = arr[low]
    let i = low
    let j = high

    while (i < j) {
      while (arr[i] <= pivot && i <= high - 1) {
        i++
      }

      while (arr[j] > pivot && j >= low + 1) {
        j--
      }

      if (i < j) {
        [arr[i], arr[j]] = [arr[j], arr[i]]
      }
    }

    [arr[low], arr[j]] = [arr[j], arr[low]]

    return j
  }

  quickSortHelper(arr, low, high) {
    if (low < high) {
      let pivotIndex = this.partition(arr, low, high)

      this.quickSortHelper(arr, low, pivotIndex - 1)

      this.quickSortHelper(arr, pivotIndex + 1, high)
    }
    return arr
  }

  quickSort(arr) {
    const n = arr.length
    this.quickSortHelper(arr, 0, n - 1)

    return arr
  }
}

const soln = new Solution()
const arr = [7, 4, 1, 5, 3]

console.log(soln.quickSort(arr))



