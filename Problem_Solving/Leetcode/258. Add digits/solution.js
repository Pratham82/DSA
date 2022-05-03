const addDigits = num => {
  const nums = num.toString().split('').map(Number)
  const res = nums.reduce((acc, val) => acc + val, 0)
  return res > 9 ? addDigits(res) : res
}


const addDigits2 = num => {
  arr = []
  while (num >= 1) {
    rem = num % 10
    num /= 10
    arr.push(parseInt(rem))
  }
  res = 0
  for (let val of arr)
    res += val
  return res > 9 ? addDigits2(res) : res
}

console.log(addDigits(5431))
console.log(addDigits2(5431))
