/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const freqMap = new Map();

  for (const num of nums) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }

  const bucket = [];

  for (const [num, freq] of freqMap) {
    if (!bucket[freq]) bucket[freq] = [];
    bucket[freq].push(num);
  }

  const res = [];

  for (let i = bucket.length - 1; i > 0; i--) {
    if (bucket[i]) {
      for (const num of bucket[i]) {
        res.push(num);
        if (res.length === k) return res;
      }
    }
  }

  return res;
};
