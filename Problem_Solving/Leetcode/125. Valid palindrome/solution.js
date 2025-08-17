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

  let str = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
  let left = 0
  let right = str.length - 1

  while (left < right) {
    if (str[left] !== str[right]) return false
    left++
    right--
  }
  return true
}


