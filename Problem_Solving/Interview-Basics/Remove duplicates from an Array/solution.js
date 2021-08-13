const removeDuplicates = arr => {
  let newArr = []
  for (let i in arr) {
    if (!newArr.includes(arr[i])) {
      newArr.push(arr[i])
    }
  }
  return newArr
}

const removeDuplicates2 = arr => {
  let index = 1
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) {
      arr[index++] = arr[i + 1]
    }
  }
  return index
}

console.log(removeDuplicates([11, 22, 22, 22, 34, 54, 34, 65, 11]))
console.log(removeDuplicates2([11, 22, 22, 22, 34, 54, 34, 65, 11]))
