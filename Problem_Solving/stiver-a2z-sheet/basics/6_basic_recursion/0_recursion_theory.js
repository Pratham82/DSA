// Example: Infinite Recursion in JavaScript
function infiniteRecursion() {
  console.log("Calling function");
  infiniteRecursion();
}

// Uncommenting this will cause infinite recursion
// infiniteRecursion();




function headRecursion(n) {
  if (n > 0) {
    headRecursion(n - 1)
    console.log(n)
  }
}

console.log(headRecursion(10)
)


function tailRecursion(n) {
  if (n === 0) return;
  console.log(n + " ");  // Processing before recursion
  tailRecursion(n - 1);  // Recursive call is the last action
}

tailRecursion(5);
