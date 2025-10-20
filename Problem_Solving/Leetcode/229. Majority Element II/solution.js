/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
  let dict = {};
  let N = nums.length;
  let resN = Math.floor(N / 3);
  let res = [];

  for (let n of nums) {
    dict[n] = dict[n] ? dict[n] + 1 : 1;
    if (dict[n] > resN && !res.includes(n)) {
      res.push(n);
    }
  }

  return res;
};
