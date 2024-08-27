function printToNRev(N) {
  function recursiveHelper(n, arr) {
    if (n === 1) {
      return arr;
    }

    arr.push(n);

    return recursiveHelper(n - 1, arr);
  }
  return recursiveHelper(N, []);
}

// console.log(printToNRev(10));

let count = 1;
function printToN(N, arr = []) {
  console.log(count);
  if (count === N) {
    return arr;
  }
  count++;
  printToN(count, []);
}

console.log(printToN(10));
