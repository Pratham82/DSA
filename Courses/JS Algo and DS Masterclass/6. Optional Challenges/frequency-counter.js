function sameFrequency(n1, n2) {
  // good luck. Add any arguments you deem necessary.
  const dict1 = {}
  const dict2 = {}
  const n1Str = String(n1).split("")
  const n2Str = String(n2).split("")

  n1Str.forEach(n => {
    if (dict1[n]) {
      dict1[n] += 1
    } else {
      dict1[n] = 1
    }
  })

  n2Str.forEach(n => {
    if (dict2[n]) {
      dict2[n] += 1
    } else {
      dict2[n] = 1
    }
  })

  for (const k in dict1) {
    if (!(k in dict2)) return false
    if (dict2[k] !== dict1[k]) return false
  }

  return true
}

console.log(sameFrequency(182, 281))
console.log(sameFrequency(34, 14))
