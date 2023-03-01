/**
 * Hash Table
 * Time O(N) | Space O(N)
 * https://leetcode.com/problems/two-sum/
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
export function twoSum(
  nums: number[],
  target: number
): number[] {
  const table: { [key: number]: number } = {};

  for (let i = 0; i < nums.length; i++) {
    if (target - nums[i] in table) {
      return [table[target - nums[i]], i];
    }
    table[nums[i]] = i;
  }

  return [];
}
