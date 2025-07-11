/*
Examples:

constructNote('aa', 'abc') // false
constructNote('abc', 'dcba') // true
constructNote('aabbcc', 'bcabcaddff') // true
*/
function constructNote(note, characters) {
  const dict = {}
  for (const c of characters) {
    dict[c] = (dict[c] || 0) + 1
  }

  console.log(dict)
  for (const n of note) {
    if (!dict[n]) {
      return false
    }
    dict[n] -= 1
  }

  return true
}

console.log(constructNote("aa", "abc")) // false

console.log(constructNote("abc", "dcba")) // true

console.log(constructNote("aabbcc", "bcabcaddff"))
