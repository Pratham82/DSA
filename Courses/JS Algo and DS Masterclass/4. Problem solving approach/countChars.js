/**
 *
 * @param {*} input_str
 * @returns {} object which contains the count of each character
 * @author Prathamesh Mali
 */
// Write a function which takes in a string and returns counts of each character in a string

// function charCount('aaa') => { a: 3}
// function charCount('hello world') => { h: 1, e:2, l3, ....}
// function charCount('my name is R2D2') => { a:1, 2:2, ...}

// Write down the steps/ pseudo code for the problem that we are solving

// The Approach
// function charCount(str) {
// 1. First loop over the string
// 2. If the character is alphanumeric the store it in a object
// 3. If the character is not present in the object then add the char in object and add the starting count to 1
// 4. If the character is already present then add to the previous counter
// 5. If the character is not alphanumeric then do not add it in the object
// 6. In the end return the object with all characters and its counts
// }

// My Approaches it. 1,2,3

// Iteration 1
// function charCount(input_str) {
//   let count = {}
//   // convert str to lowercase
//   let str = input_str.toLowerCase()
//   // 1
//   for (let i = 0; i < str.length; i++) {
//     // 2 alphanumeric check
//     if (str[i].match('^[a-zA-Z0-9]*$')) {
//       // 3
//       if (!count[str[i]]) {
//         count[str[i]] = 1
//       } else {
//         // 4
//         count[str[i]] += 1
//       }
//     }
//   }
//   // 6
//   return count
// }

// Iteration 2
// function charCount(input_str) {
//   let count = {}
//   let str = input_str.toLowerCase()
//   for (let i = 0; i < str.length; i++)
//     if (str[i].match('^[a-zA-Z0-9]*$'))
//       !count[str[i]] ? (count[str[i]] = 1) : (count[str[i]] += 1)

//   return count
// }

// Iteration 3
// function charCount(input_str) {
//   let count = {}
//   let str = input_str.toLowerCase()
//   for (let i of str)
//     if (i.match('^[a-zA-Z0-9]*$')) !count[i] ? (count[i] = 1) : (count[i] += 1)

//   return count
// }

// Colt's approach and final refactored code
function charCount(str) {
  let result = {}
  for (let char of str) {
    if (isAlphaNumeric(char)) {
      char = char.toLowerCase()
      result[char] = ++result[char] || 1
    }
  }
  return result
}

function isAlphaNumeric(char) {
  let code = char.charCodeAt(0)
  if (
    !(code > 47 && code < 58) &&
    !(code > 64 && code < 91) &&
    !(code > 96 && code < 123)
  )
    return false

  return true
}

console.log(charCount('Hello World!! 22222'))
console.log(charCount('My name is R2D2'))
