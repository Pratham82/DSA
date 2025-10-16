/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  const myHashMap = {}

  for (let n of nums) {

    if (!myHashMap[n]) {
      myHashMap[n] = 1
    } else {
      myHashMap[n] = myHashMap[n] + 1
    }

  }

  return Object.keys(myHashMap).sort((a, b) => myHashMap[b] - myHashMap[a]).slice(0, k).map(Number)
};

;
