const { performance } = require('perf_hooks')
// Program to get a sum upto the given number

// Using for loop

function addUpTo(n) {
  let sum = 0
  for (let i = 1; i <= n; i++) {
    sum += i
  }
  return sum
}

// Using mathematical formula
// function addUpToM(n) {
//   return (n * (n + 1)) / 2
// }
const addUpToM = n => (n * (n + 1)) / 2
var time1 = performance.now()
addUpToM(1000000000) // 38 -39 Sec
// addUpTo(1000000000) // 1035 Sec
var time2 = performance.now()
console.log(`Time elapsed: ${time2 - time1 / 1000} seconds`)

// console.log(addUpTo(3))
// console.log(addUpToM(3))
