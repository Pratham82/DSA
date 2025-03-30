// Write a function called same which accepts two arrays the function should  return two arrays. The function should  return true fi every value in the array has its corresponding value squared int the second array the frequency of  values must be the same

function same(arr1, arr2) {

  let check = true


  if (arr1.length !== arr2.length) {
    return false
  }

  for (let i = 0; i < arr2.length; i++) {
    if (arr2.indexOf(Math.pow(arr1[i], 2)) === -1) {
      return false
    }
  }

  return check

}


// Optimized approach with frequency counter

function same2(arr1, arr2) {

  if (arr1.length !== arr2.length) {
    return false
  }

  // make counter array for both the arrays
  let frequcncyCounter1 = {}
  let frequcncyCounter2 = {}

  for (let val of arr1) {
    frequcncyCounter1[val] = (frequcncyCounter1[val] ?? 0) + 1
  }

  for (let val of arr2) {
    frequcncyCounter2[val] = (frequcncyCounter2[val] ?? 0) + 1
  }


  for (let key in frequcncyCounter1) {
    // check if the key itself is present in the other array or not
    if (!(key ** 2 in frequcncyCounter2)) {
      return false
    }

    // check if the value of the first key matches with the second array element value
    if (frequcncyCounter1[key] !== frequcncyCounter2[key ** 2]) {
      return false
    }
  }

  return true

}

console.log(same2([1, 2, 3], [4, 1, 9]))


console.log(
  same2([1, 2, 3], [4, 1, 9])
)

console.log(
  same2([1, 2, 3], [1, 9])
)


console.log(
  same2([1, 2, 1], [4, 4, 1])
)




