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


  // optimized
  reverStringOptimized(s) {

    // helper function for swapping
    const swap = (left, right, s) => {
      if (left > right) return
      [s[left], s[right]] = [s[right], s[left]]

      return swap(left + 1, right - 1, s)
    }

    // call the helper function
    swap(0, s.length - 1, s)

    // return reverse string
    return s
  }


}

const soln = new Solution()
console.log(soln.reverStringOptimized(["h", "e", "l", "l", "o"]))
