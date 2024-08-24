function isPrime(n) {
  let divisorsCount = 0;
  if (n === 1) {
    return false;
  }
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      divisorsCount++;
    }
    if (divisorsCount > 2) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(19));
console.log(isPrime(24));
