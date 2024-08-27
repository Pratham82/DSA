function armstrongNumber(num) {
  let sumOfNums = 0;
  let inputNum = num;
  const numLength = inputNum.toString().length;
  while (inputNum > 0) {
    const digit = inputNum % 10;
    sumOfNums += Math.pow(digit, numLength);
    inputNum = Math.floor(inputNum / 10);
  }
  return sumOfNums == num;
}

console.log(armstrongNumber(153));
console.log(armstrongNumber(371));
