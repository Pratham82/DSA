class Solution {
  /**
* @param number n

* @returns number
*/
  sumOfSeries(n) {
    // code here

    // return Math.pow((n * (n + 1) /2) ,2)
    let bigN = BigInt(n);
    return (((bigN * (bigN + 1n)) / 2n) ** 2n).toString();
  }
}
