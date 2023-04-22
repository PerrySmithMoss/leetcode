/**
 * Dynamic Programming
 * Time is O(n) | Space O(n)
 * https://leetcode.com/problems/climbing-stairs/
 *
 * @param {number} n
 * @return {number}
 */
function climbStairs(n: number): number {
  const memo = new Array(n);
  memo[1] = 1;
  memo[2] = 2;

  for (let i = 3; i <= n; i++) {
    memo[i] = memo[i - 1] + memo[i - 2];
  }

  return memo[n];
}
