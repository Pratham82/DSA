/*
Examples:

areThereDuplicates(1, 2, 3) // false
areThereDuplicates(1, 2, 2) // true 
areThereDuplicates('a', 'b', 'c', 'a') // true 
*/
function areThereDuplicates(...args) {
  const dict = {}
  for (let n of args) {
    if (n in dict) {
      return true
    } else {
      dict[n] = 1
    }
  }
  return false
}

console.log(areThereDuplicates(1, 2, 4))
console.log(areThereDuplicates(1, 2, 2))
