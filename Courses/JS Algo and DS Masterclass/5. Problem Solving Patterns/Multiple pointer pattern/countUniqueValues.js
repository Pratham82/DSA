// Implement a function which accepts sorted array and counts the unique values in array
// If no unique values found return 0

function countUniqueValues(arr) {

  let slow = 0

  for (let fast = 1; fast < arr.length; fast++) {
    if (arr[slow] !== arr[fast]) {
      slow++
      arr[slow] = arr[fast]
    }
  }

  return slow + 1

}

console.log(countUniqueValues([1, 1, 1, 1, 1, 2]))
console.log(countUniqueValues([1, 2]))
