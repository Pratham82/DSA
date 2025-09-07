

/*
* parition function using hoare sceheme   with random pivot
* rearranges the elements in following manner
* - elements <= pivot end up on the left
* - elements >= pivot end up on the right
*  Returns the final pivot index
*/
function partition(arr, low, high) {
  // Step 1: Choose random pivot and swap it into the low position
  let randomIndex = low + Math.floor(Math.random() * (high - low + 1));
  [arr[randomIndex], arr[low]] = [arr[low], arr[randomIndex]]

  let pivot = arr[low]
  let i = low
  let j = high


  // loop till i does not cross j 
  // i.e left index does not crosses over right index
  while (i < j) {

    while (arr[i] <= pivot && i < high) {
      i++
    }

    while (arr[j] >= pivot && j > low) {
      j--
    }

    // swap places of left and right array : 
    // if the element find on the left is higher and 
    // the element found on the right is lower than the pivot
    if (i < j) {
      [arr[i], arr[j]] = [arr[j], arr[i]]
    }
  }

  // swap back the pivot at it's correct position since pivot is at js
  [arr[low], arr[j]] = [arr[j], arr[low]]

  // return pivot index
  return j

}

/*
 * Quicksort function which recursively sorts the array using paritition
 */
function quickSortHelper(arr, low, high) {
  if (low < high) {

    let pivotIndex = partition(arr, low, high)

    // sort from left to pivot index
    quickSortHelper(arr, low, pivotIndex - 1)

    // sort from pivot index to right
    quickSortHelper(arr, pivotIndex + 1, high)
  }
  return arr

}

function quickSort(arr) {
  let n = arr.length
  let res = quickSortHelper(arr, 0, n - 1)
  return res
}

const arr = [5, 3, 8, 4, 2, 7, 1, 10]
console.log(quickSort(arr, 0, arr.length - 1))




