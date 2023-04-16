/**
 * Backtracking DFS
 * Time is O(2^n) | Space O(n)
 * https://leetcode.com/problems/subsets-ii
 * @param {number[]} nums
 * @return {number[][]}
 */
function subsetsWithDup(nums: number[]): number[][] {
  const subsets: number[][] = [];
  nums.sort();
  getCombinations(0, [], nums, subsets);
  return subsets;
}

function getCombinations(
  index: number,
  currentSubset: number[],
  nums: number[],
  subsets: number[][]
) {
  subsets.push([...currentSubset]);
  for (let i = index; i < nums.length; i++) {
    if (i > index && nums[i] === nums[i - 1]) continue;

    currentSubset.push(nums[i]);
    getCombinations(i + 1, currentSubset, nums, subsets);
    currentSubset.pop();
  }
  return;
}
