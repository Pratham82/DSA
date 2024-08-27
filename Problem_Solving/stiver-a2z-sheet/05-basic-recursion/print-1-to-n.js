class Solution {
  printNos(N) {
    //code here
    let arr = [];
    function helper(N) {
      if (N === 1) {
        arr.push(1);
        return arr;
      }
      helper(N - 1);
      arr.push(N);
    }
    helper(N);
    console.log(arr.join(" "));
  }
}
