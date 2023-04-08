/**
 * Backtracking DFS
 * Time is O(2^n) | Space O(n)
 * https://leetcode.com/problems/subsets/
 * @param {number[]} nums
 * @return {number[][]}
 */
function subsetsBacktracking(nums: number[]): number[][] {
  const result: number[][] = [];

  const dfs = (i: number, cur: number[]) => {
    if (i === nums.length) {
      result.push(cur);
      return;
    }

    dfs(i + 1, cur);
    dfs(i + 1, cur.concat(nums[i]));
  };

  dfs(0, []);

  return result;
}

/**
 * BFS
 * Time O(2^n) | Space O(2^n)
 * https://leetcode.com/problems/subsets/
 * @param {number[]} nums
 * @return {number[][]}
 */
function subsetsBFS(nums: number[]): number[][] {
  const queue: number[][] = [[]];
  let level = 0;

  while (level < nums.length) {
    const subset = queue.shift();
    if (subset) {
      queue.push(subset);
      queue.push([...subset, nums[level]]);
      if (queue[0].length === 0) {
        level++;
      }
    }
  }

  return queue;
}

/**
 * Set
 * Time O(2^n * n) | Space O(2^n * n)
 * https://leetcode.com/problems/subsets/
 * @param {number[]} nums
 * @return {number[][]}
 */
function subsets(nums: number[]): number[][] {
  const result = new Set<number[]>();

  const search = (s: number[], index: number) => {
    result.add(s);

    for (let i = index; i < nums.length; i++) {
      search([...s, nums[i]], i + 1);
    }
  };

  search([], 0);

  return Array.from(result);
}
