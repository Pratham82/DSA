class Solution {
  reverseString(s) {
    // base case if length of string array is 0 then return empty array
    if (s.length === 0) {
      return []
    }

    // get last element
    let last = s[s.length - 1]

    // creat a sliced of array
    let slicedArr = s.slice(0, s.length - 1)

    // return the new array with last and sliced array
    return [last, ...this.reverseString(slicedArr)]
  }
}

