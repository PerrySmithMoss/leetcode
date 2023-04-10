/**
 * Backtracking DFS
 * Time O(n!) | Space O(n)
 * https://leetcode.com/problems/permutations
 * @param {number[]} nums
 * @return {number[][]}
 */
function permute(nums: number[]): number[][] {
  const result: number[][] = [];

  const dfs = (nums: number[], index: number) => {
    if (index === nums.length - 1) return result.push(nums.slice(0));

    for (let i = index; i < nums.length; i++) {
      [nums[i], nums[index]] = [nums[index], nums[i]];
      dfs(nums, index + 1);
      [nums[i], nums[index]] = [nums[index], nums[i]];
    }
  };
  dfs(nums, 0);
  return result;
}

/**
 * BFS
 * Time O(n!) | Space O(n)
 * https://leetcode.com/problems/permutations
 * @param {number[]} nums
 * @return {number[][]}
 */
function permuteBFS(nums: number[]): number[][] {
  const permutations: number[][] = [];

  const findPermutations = function (
    visited = new Set(),
    currPerm: number[] = []
  ) {
    if (currPerm.length === nums.length) {
      permutations.push(currPerm);
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (!visited.has(i)) {
        findPermutations(new Set([...visited, i]), [...currPerm, nums[i]]);
      }
    }
  };

  findPermutations();

  return permutations;
}
