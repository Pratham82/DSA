// Given two strings write a function to determine if the second string is an anagram of the first. An anagram is a word, phase or name formed by rearranging the letters of another such cinema formed from iceman

// Notes: String won't have spaces in between. All characters will be lowercase

/**
 *  My approach without using frequency counter method
 *  Time complexity O(n)
 * @param {*} st1
 * @param {*} st2
 * @returns boolean
 * @author Prathamesh Mali
 */
// function validAnagram(st1, st2) {
//   /**
//    * This method will return a string in descending order
//    * @param {*} str
//    * @returns str
//    */
//   const sortString = (str) =>
//     str
//       .split('')
//       .sort((a, b) => (a > b ? -1 : a < b ? 1 : 0))
//       .join('')
//   let str1 = sortString(st1)
//   let str2 = sortString(st2)
//   for (let i = 0; i < str1.length; i++) {
//     if (str1[i] !== str2[i]) {
//       return false
//     }
//   }
//   return true
// }

// console.log(validAnagram('cinema', 'iceman'))
// console.log(validAnagram('', ''))
// console.log(validAnagram('rat', 'car'))

//* Approaches using frequency pattern
// Iteration 1
// function validAnagramFreq(st1, st2) {
//   let counter1 = {}
//   let counter2 = {}
//   for (let char of st1) {
//     if (!counter1[char]) {
//       counter1[char] = 1
//     } else {
//       counter1[char]++
//     }
//   }
//   for (let char of st2) {
//     if (!counter2[char]) {
//       counter2[char] = 1
//     } else {
//       counter2[char]++
//     }
//   }

//   // Iterating over the counter1
//   for (let key of Object.keys(counter1)) {
//     // Check if the key is present in the object
//     if (!(key in counter2)) {
//       return false
//     }
//     // If at all the key is present then check if the key has same count
//     if (!(counter1[key] == counter2[key])) {
//       return false
//     }
//   }
//   return true
// }

// iteration 2
// function validAnagramFreq(st1, st2) {
//   let counter = (str) => {
//     let obj = {}
//     for (let char of str) {
//       if (!obj[char]) {
//         obj[char] = 1
//       } else {
//         obj[char]++
//       }
//     }
//     return obj
//   }
//   let counter1 = counter(st1)
//   let counter2 = counter(st2)

//   // Iterating over the counter1
//   for (let key of Object.keys(counter1)) {
//     // Check if the key is present in the object
//     if (!(key in counter2)) {
//       return false
//     }
//     // If at all the key is present then check if the key has same count
//     if (!(counter1[key] == counter2[key])) {
//       return false
//     }
//   }
//   return true
// }

// iteration 3
/**
 *
 * @param {*} st1
 * @param {*} st2
 * @returns boolean
 * @author Prathamesh Mali
 */
function validAnagramFreq(st1, st2) {
  /**
   * My approach using frequency counter method
   * @param {*} str
   * @returns object of characters with its frequency
   */
  let counter = (str) => {
    let obj = {}
    str.split('').map((char) => (!obj[char] ? (obj[char] = 1) : obj[char]++))
    return obj
  }
  let counter1 = counter(st1)
  let counter2 = counter(st2)

  // Iterating over the counter1
  for (let key of Object.keys(counter1)) {
    // Check if the key is present in the object
    if (!(key in counter2)) {
      return false
      // return { st1, st2, op: false }
    }
    // If at all the key is present then check if the key has same count
    if (!(counter1[key] == counter2[key])) {
      return false
      // return { st1, st2, op: false }
    }
  }
  return true
  // return { st1, st2, op: true }
}
console.log(validAnagramFreq('cinema', 'iceman'))
console.log(validAnagramFreq('rat', 'car'))
console.log(validAnagramFreq('rat', 'tar'))
console.log(validAnagramFreq('aaz', 'zza'))
console.log(validAnagramFreq('cinema', 'cccccc'))
console.log(validAnagramFreq('', ''))

console.log("Colt's approach")
function validAnagram(first, second) {
  if (first.length != second.length) {
    return false
  }
  const lookup = {}
  for (let i = 0; i < first.length; i++) {
    let letter = first[i]
    //if letter exists increment, otherwise set to 1
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1)
  }

  for (let i = 0; i < second.length; i++) {
    let letter = second[i]
    // Can't find letter or letter is zero then its not an anagram
    if (!lookup[letter]) {
      return false
    } else {
      lookup[letter] -= 1
    }
  }
  return true
}

console.log(validAnagram('cinema', 'iceman'))
console.log(validAnagram('rat', 'car'))
console.log(validAnagram('rat', 'taar'))
console.log(validAnagram('rat', 'tar'))
