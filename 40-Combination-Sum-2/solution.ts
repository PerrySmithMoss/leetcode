/**
 * Backtracking backtrack
 * Time is O(2^n) | Space O(n)
 * https://leetcode.com/problems/combination-sum-ii
 *
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
function combinationSum2(candidates: number[], target: number): number[][] {
  const combinations: number[][] = [];

  candidates.sort();

  const currentCombination: number[] = [];

  function backtrack(index: number, target: number) {
    if (target === 0) {
      combinations.push([...currentCombination]);
      return;
    }

    if (target < 0) return;

    for (let i = index; i < candidates.length; i++) {
      if (i === index || candidates[i] !== candidates[i - 1]) {
        const currNum = candidates[i];
        currentCombination.push(currNum);
        backtrack(i + 1, target - currNum);
        currentCombination.pop();
      }
    }
  }

  backtrack(0, target);
  return combinations;
}
