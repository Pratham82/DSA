/*

Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

Examples:

isSubsequence('hello', 'hello world'); // true
isSubsequence('sing', 'sting'); // true
isSubsequence('abc', 'abracadabra'); // true
isSubsequence('abc', 'acb'); // false (order matters)
*/

function isSubsequence(word, sentence) {
  // good luck. Add any arguments you deem necessary.
  let w = 0
  let s = 0

  while (s < sentence.length) {
    if (word[w] === sentence[s]) {
      w++
    }
    if (w === word.length) {
      return true
    }
    s++
  }
  return false
}

console.log(isSubsequence("hello", "hello world"))
console.log(isSubsequence("sing", "sting"))
console.log(isSubsequence("abc", "acb"))
