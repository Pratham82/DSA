class Solution {
  frequencySort(s) {
    //your code goes here
    let dict = {}
    for (let i = 0; i < s.length; i++) {
      if (dict[s[i]]) {
        dict[s[i]] += 1
      } else {
        dict[s[i]] = 1
      }
    }

    return Object.entries(dict)
      .sort((a, b) => {
        if (b[1] === a[1]) {
          return a[0].localeCompare(b[0]) // tie-breaker
        }
        return b[1] - a[1]
      })
      .map(val => val[0])
  }
}

const soln = new Solution()
console.log(soln.frequencySort('tree'))
