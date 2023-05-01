/**
 * Hash Map & Bucket Array
 * Time is O(n) | Space O(n)
 * https://leetcode.com/problems/top-k-frequent-elements
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
function topKFrequent(nums: number[], k: number): number[] {
  const freqMap: Map<number, number> = new Map();
  const bucket: Set<number>[] = [];
  const result: number[] = [];

  for (let num of nums) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }

  for (let [num, freq] of freqMap) {
    bucket[freq] = (bucket[freq] || new Set()).add(num);
  }

  for (let i = bucket.length - 1; i >= 0; i--) {
    if (bucket[i]) result.push(...bucket[i]);
    if (result.length === k) break;
  }
  return result;
}
