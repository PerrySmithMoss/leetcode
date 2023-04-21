## 40. Combination Sum II

Given a collection of candidate numbers (`candidates`) and a target number (`target`), find all unique combinations in `candidates` where the candidate numbers sum to `target`.

Each number in `candidates` may only be used once in the combination.

Note: The solution set must not contain duplicate combinations.

##### Example 1:

> Input: candidates = [10,1,2,7,6,1,5], target = 8
> Output:
> [
> [1,1,6],
> [1,2,5],
> [1,7],
> [2,6]
> ]

##### Example 2:

> Input: candidates = [2,5,2,1,2], target = 5
> Output:
> [
> [1,2,2],
> [5]
> ]

###### Contraints:

- `1 <= candidates.length <= 100`
- `1 <= candidates[i] <= 50`
- `1 <= target <= 30`

## Solution

First the candidates array is sorted in ascending order using the .sort() method. Note: we sort the input array `candidates` in ascending order before generating the `combinations`. Sorting the array is done to simplify the duplicate elimination logic in the subsequent loop. By sorting the array beforehand, duplicate numbers are guaranteed to be adjacent to each other. This makes it easier to skip duplicates in the loop by checking if the current number is equal to the previous number and `i` is greater than `index`, where `index` is the starting `index` for generating subsets. This step helps to avoid duplicate `subsets` in the final result.

An empty array called `combinations` is initialized to store all the combinations that add up to the `target` sum.

An empty array called `currentCombination` is initialized to keep track of the current combination of candidates that add up to the `target` sum.

A recursive helper function called `backtrack` is defined that takes in two parameters: an `index` and a `target`. The `index` represents the starting index of the `candidates` array, and the `target` represents the remaining sum that needs to be reached.

The base case of the recursive function `backtrack` is when the `target` is equal to 0, meaning that the current combination of candidates add up to the `target` sum. In this case, the `currentCombination` array is copied into the `combinations`.

Another base case of the recursive function `backtrack` is when the `target` is less than 0, meaning that the current combination of candidates exceeds the `target` sum. In this case, the function simply returns without adding the current combination to the `combinations` array.

A loop is started that iterates over the `candidates` array, starting at the `index` and continuing until the end of the array.

If the current index is the same as the starting `index`, or the current candidate is not equal to the previous candidate, the current candidate is added to the `currentCombination` array, and the `backtrack` function is called recursively with the updated `index` and `target` values. The `index` is incremented by 1 to ensure that the same candidate is not reused, and the `target` is reduced by the value of the current candidate.

Once the recursive call returns, the last candidate that was added to the `currentCombination` array is removed. This is because we need to backtrack and try other candidates in the `candidates` array.

After the loop has finished iterating over all the `candidates`, the `backtrack` function is called with the starting `index` of 0 and the `target` sum.

Once the `backtrack` function has finished executing, the `combinations` array is returned, containing all the combinations of candidates that add up to the `target` sum.

##### Complexity

- Time O(2^n)
- Space O(n)

##### Code

```javascript
/**
 * Backtracking backtrack
 * Time is O(2^n) | Space O(n)
 * https://leetcode.com/problems/combination-sum-ii
 *
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = (candidates: number[], target: number): number[][] => {
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
};
```
