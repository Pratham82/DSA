function printAllDivisors(num) {
  let divisors = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      // divisors.push(i);
      divisors += i;
    }
  }
  return divisors;
}

console.log(printAllDivisors(36));
console.log(printAllDivisors(4));
