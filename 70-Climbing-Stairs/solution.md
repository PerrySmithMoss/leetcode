## 70. Climbing Stairs

You are climbing a staircase. It takes `n` steps to reach the top.

Each time you can either climb `1` or `2` steps. In how many distinct ways can you climb to the top?

##### Example 1:

> Input: n = 2,
> Output: 2
> Explanation: There are two ways to climb to the top:

1. 1 step + 1 step
2. 2 steps

##### Example 2:

> Input: n = 3
> Output: 3
> Explanation: There are three ways to climb to the top:

1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step

###### Contraints:

- `1 <= n <= 45`

## Solution

An empty array `memo` of length `n` is created to store the results of the subproblems. This array will be used to implement `memoization`.

The base cases are set for n = 1 and n = 2. Since there is only one way to climb one step, `memo[1]` is set to 1. Similarly, since there are two ways to climb two steps (either take one step twice or take two steps together), `memo[2]` is set to 2.

A loop is initiated that starts at 3 and iterates up to `n`.

At each iteration, the value of `memo[i]` is set to the sum of `memo[i-1]` and `memo[i-2]`.

Finally, the value of `memo[n]` is returned, which represents the number of distinct ways to climb to the top of the staircase with `n` steps.

##### Complexity

- Time O(n)
- Space O(n)

##### Code

```javascript
/**
 * Dynamic Programming
 * Time is O(n) | Space O(n)
 * https://leetcode.com/problems/climbing-stairs/
 *
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n: number): number {
  const memo = new Array(n);
  memo[1] = 1;
  memo[2] = 2;

  for (let i = 3; i <= n; i++) {
    memo[i] = memo[i - 1] + memo[i - 2];
  }

  return memo[n];
};
```
