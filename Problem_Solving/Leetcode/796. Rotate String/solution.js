/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
  // let rem = ''

  // if (s.length !== goal.length) return false

  // for (let i = 0; i < s.length; i++) {
  //     rem += s[i]
  //     let s2 = s.slice(i + 1)

  //     let possibleGoal = s2 + rem

  //     if (possibleGoal === goal) {
  //         return true
  //     }
  // }
  // return false


  // optimal
  if (s.length !== goal.length) return false
  const doubled = s + s
  if (doubled.includes(goal)) {
    return true
  }
  return false


};;
