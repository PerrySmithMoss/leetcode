/**
 * Backtracking DFS
 * Time is O(n * 2^n) | Space O(n)
 * https://leetcode.com/problems/combination-sum
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
function combinationSum(candidates: number[], target: number): number[][] {
  const combinations: number[][] = [];

  function dfs(index: number, currentCombination: number[], target: number) {
    if (target === 0) {
      combinations.push([...currentCombination]);
      return;
    }

    if (target < 0 || index >= candidates.length) {
      return;
    }

    dfs(index + 1, currentCombination, target);
    currentCombination.push(candidates[index]);
    dfs(index, currentCombination, target - candidates[index]);
    currentCombination.pop();
  }

  candidates.sort((a, b) => a - b);
  dfs(0, [], target);

  return combinations;
}
