// * PrintName('prathamesh')

// Print name for N times
function printName(i, n) {
  // operation to perform
  i = i + 1
  // base case
  if (i > n) return
  console.log('Prathamesh')

  // increment
  printName(i, n)
}

printName(1, 10)

// * Print linearly 1 to N
function printToN(i, n) {
  // base case
  if (i > n) return

  // operation
  console.log(i)

  // increment
  i += 1

  // recursive call to the function
  printToN(i, n)
}

printToN(1, 10)

// * Print linearly N to 1
function printFromNTo1(n, i) {
  // operation
  console.log(n)

  // base case
  if (n === 1) return

  // decrement
  n -= 1

  // recursive call to the function
  printFromNTo1(n, i)
}

printFromNTo1(10, 1)

// * Print linearly 1 to N (Using backtracking)
// * Print linearly N to 1 (Using backtracking)
