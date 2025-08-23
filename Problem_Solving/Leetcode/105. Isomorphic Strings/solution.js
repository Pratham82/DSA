/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
  let mapS = {}
  let mapT = {}

  if (s.length !== t.length) return false

  for (let i = 0; i < s.length; i++) {

    // take current char
    let char1 = s[i]
    let char2 = t[i]

    // check if the char exist in the string and 2nd char doesn't matches
    if (mapS[char1] && mapS[char1] !== char2) return false
    if (mapT[char2] && mapT[char2] !== char1) return false

    // map the char from first word to the second and vice versa
    mapS[char1] = char2
    mapT[char2] = char1

  }
  return true

};
