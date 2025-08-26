/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {

  // Brute force

  // const sanitize = (s) => s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()

  // const reverseString = (s) => {
  //     let arr =  sanitize(s).split('')
  //     let left = 0;
  //     let right = arr.length - 1;
  //     while (left < right) {
  //         let temp = arr[left];
  //         arr[left] = arr[right];
  //         arr[right] = temp;
  //         left++;
  //         right--;
  //     }
  //     return arr.join('');

  // return this.sanitize(s) === this.reverseString(s)

  // let str = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
  // let left = 0
  // let right = str.length - 1
  //
  // while (left < right) {
  //   if (str[left] !== str[right]) return false
  //   left++
  //   right--
  // }
  // return true

  // with recursion
  const reverse = (s) => {
    const rev = (left, right, s) => {
      if (left > right) return

      [s[right], s[left]] = [s[left], s[right]]

      return rev(left + 1, right - 1, s)
    }

    rev(0, s.length - 1, s)

    return s.join('')
  }

  const sanitize = s => s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
  const reversed = reverse(sanitize(s).split(''))
  return reversed === sanitize(s)
}


