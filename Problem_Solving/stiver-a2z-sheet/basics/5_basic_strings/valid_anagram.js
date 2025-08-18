class Solution {
  anagramStrings(s, t) {
    //your code goes here
    let firstDict = {}
    let secondDict = {}

    for (let i = 0; i < s.length; i++) {
      if (firstDict[s[i]]) {
        firstDict[s[i]] += 1
      } else {
        firstDict[s[i]] = 1
      }
    }

    for (let i = 0; i < t.length; i++) {
      if (secondDict[t[i]]) {
        secondDict[t[i]] += 1
      } else {
        secondDict[t[i]] = 1
      }
    }

    for (const [k, v] of Object.entries(firstDict)) {
      if (firstDict[k] !== secondDict[k]) {
        return false
      }
    }

    return true
  }
}

const soln = new Solution()
console.log(soln.anagramStrings('cat', 'tac'))
console.log(soln.anagramStrings('tan', 'dan'))

