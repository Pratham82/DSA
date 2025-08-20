class Solution {
  largeOddNum(s) {
    //your code goes here
    // let maxOddSubStr = ''
    //
    // for (let i = 0; i < s.length; i++) {
    //   let subStr = ''
    //   for (let j = i; j < s.length; j++) {
    //     subStr += s[j]
    //     let currentNum = Number(subStr)
    //     if (currentNum > maxOddSubStr && currentNum % 2 !== 0) {
    //       maxOddSubStr = currentNum
    //     }
    //   }
    // }

    // return maxOddSubStr


    // * Brute force
    // for (let i = s.length - 1; i >= 0; i--) {
    //   let digit = Number(s[i])
    //   if (digit % 2 !== 0) {
    //     return Number(s.slice(0, i + 1))
    //   }
    // }
    // return ''

    // * Apporach 2
    // let left = 0
    // let right = s.length - 1
    //
    //
    // while (left < right) {
    //   console.log({ left, s: left })
    //   if (s[left] > 0 && s[right] % 2 != 0) {
    //     // console.log({ left, leftS: s[left], right, i: s[right] })
    //     return s.slice(left, right + 1)
    //   }
    //   left++
    //   right--
    // }
    // return ''


    // iterate from back to front
    let i
    let index = -1

    for (i = s.length - 1; i >= 0; i--) {
      if ((s[i] - 0) % 2 === 1) {
        // set found odd index (end index of number)
        index = i
        break
      }
    }

    // find the start index (start of the number non zero)
    i = 0
    while (i <= index && (s[i] - '0') === 0) i++


    // return the string with start and end index
    return s.slice(i, index + 1)


  }

}

const soln = new Solution()
console.log(soln.largeOddNum('0214638'))
console.log(soln.largeOddNum('1234567890'))
// console.log(soln.largeOddNum('0'))

// console.log(Number(00023450000000000000001))
