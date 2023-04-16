## 90. Subsets II

Given an integer array `nums` that may contain duplicates, return all possible
subsets
(the power set).

The solution set must not contain duplicate subsets. Return the solution in any order.

##### Example 1:

> Input: nums = [1,2,2]
> Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]

##### Example 2:

> Input: nums = [0]
> Output: [[],[0]]

###### Contraints:

- `1 <= nums.length <= 10`
- `10 <= nums[i] <= 10`

## Solution

The `subsetsWithDup` function is the entry point of the algorithm. It takes an array of numbers `nums` as input and returns an array of arrays `subsets` that represent all the subsets of `nums` without duplicates. It initializes an empty array `subsets` to store the subsets. Note: we sort the input array `nums` in ascending order before generating the subsets. Sorting the array is done to simplify the duplicate elimination logic in the subsequent loop. By sorting the array beforehand, duplicate numbers are guaranteed to be adjacent to each other. This makes it easier to skip duplicates in the loop by checking if the current number is equal to the previous number and `i` is greater than `index`, where `index` is the starting `index` for generating subsets. This step helps to avoid duplicate `subsets` in the final result.

The `getCombinations` function is a helper function that performs the actual recursive generation of the subsets. It takes four parameters: `index`, `currentSubset`, `nums`, and `subsets`. The `index` represents the starting index from which to generate subsets, `currentSubset` represents the current subset being generated, `nums` represents the input array of numbers, and `subsets` represents the array to store the generated subsets.

Inside the `getCombinations` function, the first operation is to push a copy of the `currentSubset` into the `subsets` array. This adds the current subset to the list of generated subsets.

Then, a for loop is used to iterate over the `nums` array starting from the `index`. For each iteration, the algorithm checks if the current number at index `i` is equal to the previous number at index `i-1`. If `i` is greater than `index` and they are equal, it continues to the next iteration, skipping duplicate elements. This is done to avoid generating duplicate subsets.

If the current number is not a duplicate, it is added to the `currentSubset`, and the `getCombinations` function is recursively called with an updated `index` of `i + 1` to generate subsets starting from the next index.

After the recursive call, `current.pop()` is used to backtrack and remove the last added element from the `currentSubset`, allowing the algorithm to explore other combinations.

The recursion continues until all possible combinations are generated.

Finally, the `subsetsWithDup` function returns the `subsets` array, which contains all the generated subsets without duplicates.

##### Complexity

- Time O(2^n)
- Space O(n)

##### Code

```javascript
/**
 * Backtracking DFS
 * Time is O(2^n) | Space O(n)
 * https://leetcode.com/problems/subsets-ii
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = (nums: number[]): number[][] => {
  const subsets: number[][] = [];
  nums.sort();
  getCombinations(0, [], nums, subsets);
  return subsets;
};

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
```
