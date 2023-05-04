/**
 * Hash Table
 * Time is O(n) | Space O(n)
 * https://leetcode.com/problems/longest-consecutive-sequence/
 *
 * @param {number[]} nums
 * @return {number}
 */
function longestConsecutive(nums: number[]): number {
  const map: Map<number, number> = new Map();
  let maxLength = 0;

  for (let num of nums) {
    if (map.has(num)) continue;

    const leftLength = map.get(num - 1) || 0;
    const rightLength = map.get(num + 1) || 0;
    const totalLength = leftLength + rightLength + 1;

    map.set(num, totalLength);
    maxLength = Math.max(maxLength, totalLength);

    map.set(num - leftLength, totalLength);
    map.set(num + rightLength, totalLength);
  }

  return maxLength;
}
