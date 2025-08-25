class Solution {
  factorial(n) {
    //your code goes here
    if (n === 0) {
      return 1
    }
    return n * this.factorial(n - 1);
  }
}

