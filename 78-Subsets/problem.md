## 78. Subsets

Given an integer array `nums`` of unique elements, return all possible
subsets
(the power set).

The solution set must not contain duplicate subsets. Return the solution in any order.

##### Example 1:

> **Input:** nums = [1,2,3] > **Output**: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

##### Example 2:

> **Input:** nums = [0] > **Output:** [[],[0]]

###### Contraints:

- `1 <= nums.length <= 10`
- `10 <= nums[i] <= 10`
- All the numbers of `nums` are unique.

## Solution

For this solution an empty two-dimensional array called `result` is first initialized to hold all the subsets of `nums`. Next, a recursive function called `dfs` is defined to perform a depth-first search (DFS) with `backtracking`. It takes two arguments: the index `i` and the current subset `cur`. For our base-case of the recursive function we check if the index `i` reaches the length of `nums`, that means the function has gone through all possible subsets and it adds the current subset `cur` to the `result` array. Otherwise, the function calls itself recursively twice: once to exclude the current element at index `i`, and once to include it. In the first call, the index `i` is incremented by 1 but `cur` is not changed. In the second call, `cur` is concatenated with the element at index `i` before being passed to the function recursively. The initial call to `dfs` is made with `i` set to `0` and `cur` set to an empty array. After all recursive calls have been made, the function returns the resulting two-dimensional array of all possible subsets of `nums`.


##### Complexity

- Time O(2^n)
- Space O(n)

##### Code

```javascript
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const result = [];

  function dfs(i, cur) {
    if (i === nums.length) {
      result.push(cur);
      return;
    }

    dfs(i + 1, cur);
    dfs(i + 1, cur.concat(nums[i]));
  }

  dfs(0, []);

  return result;
};
```
