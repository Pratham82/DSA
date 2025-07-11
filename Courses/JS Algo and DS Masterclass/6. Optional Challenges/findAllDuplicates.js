/*
findAllDuplicates([4,3,2,7,8,2,3,1]) // array with 2 and 3
findAllDuplicates([4, 3, 2, 1, 0]) // []
findAllDuplicates([4, 3, 2, 1, 0, 1, 2, 3]) // array with 3, 2, and 1
*/
function findAllDuplicates(arr) {
  // add whatever parameters you deem necessary - good luck!

  const dict = {}
  const duplicates = []

  for (let i of arr) {
    if (dict[i]) {
      dict[i] += 1
    } else {
      dict[i] = 1
    }
    if (dict[i] > 1) {
      duplicates.push(i)
    }
  }
  return duplicates
}

console.log(findAllDuplicates([4, 3, 2, 7, 8, 2, 3, 1]))
console.log(findAllDuplicates([4, 3, 2, 1, 0]))
console.log(findAllDuplicates([4, 3, 2, 1, 0, 1, 2, 3])) // array with 3, 2, and 1
