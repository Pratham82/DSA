class Solution {
  isomorphicString(s, t) {
    let getCounts = (str) => {
      let res = {}
      for (let s of str) {
        res[s] = res[s] ? res[s] + 1 : 1
      }
      return res
    }
    let word1 = getCounts(s)
    let word2 = getCounts(t)

    // if words length don't match return
    if (Object.keys(word1).length !== Object.keys(word2).length) {
      return false
    }

    console.log(word1, word2)

    // check if each word1 preset in word2 not the word, just match the count
    // let sortOnVal = (obj) => {
    //   return Object.entries(obj).map(([k, v]) => ({ k, v })).sort((a, b) => a.v - b.v)
    // }



    return true
  }

  iso(s, t) {
    let mapS = {}
    let mapT = {}

    if (s.length !== t.length) return false

    for (let i = 0; i < s.length; i++) {
      let c1 = s[i]
      let c2 = t[i]

      if (mapS[c1] && mapS[c1] !== c2) return false
      if (mapT[c2] && mapT[c2] !== c1) return false

      mapS[c1] = c2
      mapT[c2] = c1

    }
    return true
  }


  iso2(s, t) {
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
  }


}

const soln = new Solution()
// console.log(soln.isomorphicString('egg', 'add'))
// console.log(soln.isomorphicString('sex', 'tax'))
// console.log(soln.iso('paad', 'mxxt'))
console.log(soln.iso('paper', 'title'))
console.log(soln.iso2('abab', 'baab'))
// console.log(soln.isomorphicString('apple', 'bbnbm'))
