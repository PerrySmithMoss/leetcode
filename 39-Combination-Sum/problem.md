## 39. Combination Sum

Given an array of distinct integers `candidates` and a `target` integer target, return a list of all unique combinations of `candidates` where the chosen numbers sum to `target`. You may return the combinations in any order.

The same number may be chosen from `candidates` an unlimited number of times. Two combinations are unique if the
frequency
of at least one of the chosen numbers is different.

The test cases are generated such that the number of unique `combinations` that sum up to `target` is less than 150 combinations for the given input.

##### Example 1:

> Input: candidates = [2,3,6,7], target = 7
> Output: [[2,2,3],[7]]
> Explanation:
> 2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
> 7 is a candidate, and 7 = 7.
> These are the only two combinations.

##### Example 2:

> Input: candidates = [2,3,5], target = 8
> Output: [[2,2,2,2],[2,3,3],[3,5]]

##### Example 3:

> Input: candidates = [2], target = 1
> Output: []

###### Contraints:

- `1 <= candidates.length <= 30`
- `2 <= candidates[i] <= 40`
- All elements of candidates are distinct.
- `1 <= target <= 40`

## Solution

We begin by initializing an empty array called `results` to store the valid combinations of `candidates` that sum up to the `target`.

Next we define a recursive helper function `dfs()` (Depth-First Search) that takes three parameters: `index`, `curr`, and `target`. The `index` keeps track of the current candidate being considered, `curr` keeps track of the current combination being built, and `target` keeps track of the remaining target sum.

As our first base case of the recursive function we check if `target` is equal to 0. If so, it means we have found a valid `combination` that sums up to the `target`. In that case, we push a copy of `curr` to the `results` array. This is done to avoid reference sharing and to create a new copy of the current `combination`, as arrays in JavaScript are passed by reference. Then we return to exit the current call of `dfs()`.

As our second base case we check if the `target` is less than 0 or if `index` is greater than or equal to the length of `candidates` array. If either of these conditions are `true`, it means we have exceeded the `target` sum or reached the end of the `candidates` array, if either return true and we `return` to stop further exploration.

Next we call `dfs()` recursively with `index` incremented by 1, `curr` unchanged, and `target` unchanged. This step skips the current candidate and explores combinations without including it, as the same number can be chosen from `candidates` an unlimited number of times.

For the next step we push the current candidate `(candidates[index])` to the `curr` combination. This step chooses the current candidate and adds it to the current combination being built.

We then call `dfs()` recursively again, but this time with `index` unchanged, `curr` unchanged, and `target` reduced by subtracting the current candidate value `(candidates[index])`. This step explores combinations that include the current candidate, as it may be chosen multiple times.

After the exploration with the current candidate, we backtrack by popping the last added element from `curr`. This step removes the current candidate from the current combination, allowing us to explore other possibilities.

Before we make our first `dfs()` call we sort the `candidates` array in ascending order using the `sort()` method with a custom comparison function `(a, b) => a - b)`. This is done to optimize the backtracking process by allowing us to skip certain candidates early on and avoid redundant computations.

Now we make our first call to `dfs()`, initially with `index` set to 0, `curr` as an empty array, and `target` as the input target value. This starts the recursion and exploration process with the initial values.

Finally, we return the `results` array, which contains all the valid combinations of candidates that sum up to the `target`. Voilà!

##### Complexity

- Time O(n \* 2^n)
- Space O(n)

##### Code

```javascript
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const results = [];

  function dfs(index, curr, target) {
    if (target === 0) {
      results.push([...curr]);
      return;
    }

    if (target < 0 || index >= candidates.length) {
      return;
    }

    dfs(index + 1, curr, target);
    curr.push(candidates[index]);
    dfs(index, curr, target - candidates[index]);
    curr.pop();
  }

  candidates.sort((a, b) => a - b);
  dfs(0, [], target);

  return results;
};
```
