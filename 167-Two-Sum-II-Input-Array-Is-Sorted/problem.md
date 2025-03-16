## 238. Product of Array Except Self

Given a 1-indexed array of integers `numbers` that is already sorted in non-decreasing order, find two numbers such that they add up to a specific `target` number. Let these two numbers be `numbers[index1]` and `numbers[index2]` where `1 <= index1 < index2 <= numbers.length`.

Return the indices of the two numbers, `index1` and `index2`, added by one as an integer array `[index1, index2]` of length 2.

The tests are generated such that there is exactly one solution. You may not use the same element twice.

Your solution must use only constant extra space.

##### Example 1:

> Input: numbers = [2,7,11,15], target = 9
> Output: [1,2]
> Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].

##### Example 2:

> Input: numbers = [2,3,4], target = 6
> Output: [1,3]
> Explanation: The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. We return [1, 3].

##### Example 3:

> Input: numbers = [-1,0], target = -1
> Output: [1,2]
> Explanation: The sum of -1 and 0 is -1. Therefore index1 = 1, index2 = 2. We return [1, 2].

###### Contraints:

- `2 <= numbers.length <= 3 * 104`
- `1000 <= numbers[i] <= 1000`
- `numbers` is sorted in non-decreasing order.
- `-1000 <= target <= 1000`
The tests are generated such that there is exactly one solution.

## Solution

The function initializes two pointers, `p1` and `p2`, which initially point to the first and last elements of the `numbers` array. It then enters a while loop that continues until `p1` is no longer less than `p2`.

During each iteration of the loop, the function calculates the sum of the values at `numbers[p1]` and `numbers[p2]` and stores it in the variable `sum`. If `sum` is greater than `target`, the function decrements `p2`, which in turns points `p2` to it's left neighbour (smaller value). If `sum` is less than `target`, the function increments `p1`, which increases the value of the `sum`, getting it closer to the `target`. 

If `sum` is equal to `target`, the function has found the two numbers that add up to the `target` integer. It then returns an array containing the indices of the two numbers, which are `p1 + 1` and `p2 + 1`.

##### Complexity

- Time O(n)
- Space O(1)

##### Code

```javascript
/**
 * Two Pointers
 * Time is O(n) | Space O(1)
 * https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
 *
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
function twoSum(numbers: number[], target: number) {
  let p1 = 0;
  let p2 = numbers.length - 1;

  while (p1 < p2) {
    let sum = numbers[p1] + numbers[p2];
    if (sum > target) {
      p2--;
    } else if (sum < target) {
      p1++;
    } else {
      return [p1 + 1, p2 + 1];
    }
  }
}
```
