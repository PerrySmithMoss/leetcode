## 78. Permutations

Given an array `nums` of distinct integers, return all the possible permutations. You can return the answer in any order.

##### Example 1:

> **Input:** nums = [1,2,3] > **Output**: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

##### Example 2:

> **Input:** nums = [0,1] > **Output:** [[0,1],[1,0]]

##### Example 3:

> **Input:** nums = [1] > **Output:** [[1]]

###### Contraints:

- `1 <= nums.length <= 6`
- `10 <= nums[i] <= 10`
- All the numbers of `nums` are unique.

## Solution

The `permute` function takes an array `nums` as an input and returns an array of all possible permutations of the elements in `nums`.

The algorithm uses a depth-first search (DFS) approach to generate all permutations. The main function creates an empty `result` array to store the permutations and then calls a helper function `dfs` with `nums` and `0` as arguments.


The `dfs` function takes in `nums` and an `index` as arguments. The `index` variable keeps track of the current position in the array that we are considering.

The base case of the recursion is when we reach the end of the array (i.e., `index === nums.length - 1`). At this point, we push a copy of the current permutation (i.e., `nums.slice(0)`) to the `result` array.

If we haven't reached the end of the array yet, we use a for loop to generate all possible permutations of the remaining elements in the array. We start the loop at the current index (`i = index`) and swap the element at the current `index` with each of the elements that come after it. For each swap, we recursively call `dfs` with the updated `nums` array and the next `index` (index + 1).

After the recursive call returns, we swap the elements back to their original positions before moving on to the next element in the loop. This is important to ensure that we don't generate duplicate permutations.

Finally, the `dfs` function is called with `nums` and `0` as initial arguments from the `permute` function. The `result` array is then returned.

##### Complexity

- Time O(n!)
- Space O(n)

##### Code

```javascript
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const result = [];

  const dfs = (nums, index) => {
    if (index === nums.length - 1) return result.push(nums.slice(0));

    for (let i = index; i < nums.length; i++) {
      [nums[i], nums[index]] = [nums[index], nums[i]];
      dfs(nums, index + 1);
      [nums[i], nums[index]] = [nums[index], nums[i]];
    }
  };
  dfs(nums, 0);
  return result;
};
```
