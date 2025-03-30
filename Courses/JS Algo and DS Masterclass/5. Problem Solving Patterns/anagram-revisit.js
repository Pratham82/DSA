
// Given two strings write a function to determine if the second string is an anagram of the first. An anagram is a word, phase or name formed by rearranging the letters of another such cinema formed from iceman

const { log } = require("node:console")

// Notes: String won't have spaces in between. All characters will be lowercase


function validAnagram(str1, str2) {
  let firstWordCounter = {}
  let secondWordCounter = {}

  for (let char of str1) {
    firstWordCounter[char] = (firstWordCounter[char] || 0) + 1
  }

  for (let char of str2) {
    secondWordCounter[char] = (secondWordCounter[char] || 0) + 1
  }


  for (let key in firstWordCounter) {
    const fwc = firstWordCounter[key]
    const swc = secondWordCounter[key]
    console.log(fwc, swc)
    if (fwc !== swc) {
      return false
    }
  }

  return true

}


console.log(validAnagram('aaz', 'zza'))
console.log(validAnagram('anagram', 'nagaram'))
console.log(validAnagram('querty', 'eurtyq'))
console.log(validAnagram('', ''))

