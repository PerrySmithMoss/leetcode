## 20. Binary Search

Given an array of integers `nums` which is sorted in ascending order, and an integer `target`, write a function to search `target` in nums. If `target` exists, then return its index. Otherwise, return `-1`.

You must write an algorithm with `O(log n)` runtime complexity.

##### Example 1:

> **Input:** nums = [-1,0,3,5,9,12], target = 9
> **Outpt:** 4
> **Explanation:** 9 exists in nums and its index is 4

##### Example 2:

> **Input:** nums = [-1,0,3,5,9,12], target = 2
> **Outpt:** -2
> **Explanation:** 2 does not exist in nums so return -1

###### Contraints:

- `1 <= nums.length <= 104`
- `-104 < nums[i], target < 104`
- All the integers in `nums` are **unique**
- `nums` is sorted in ascending order.

## Solution

We define two variables, one called `start` and the other called `end`. The `start` will represent the first index in the array and the `last` will represent the last index in the array. Next, the function enteres a while loop that will continue running until `start` is less than or equal to `end`. We then initialize a variable called `middle` which will calculate and hold the middledle index between `start` and `end` upon each iteration of the loop. If the `middle` value is equal to the target we know that the we have found the `target` and we can return the `middle` index. On the other hand, if the `middle` value is less than the `target` number we know that the target must exist to the right of `middle`, so we reassign `start` to the `middle` index + 1. Oterwise, we know that the `target` must exist to the left of the `middle` index, so we reassign `end` to the `middle` index - 1. If no `middle` value is retured in the loop we know that the `target` has not been found in the `nums` array and thus we return `-1`.

##### Complexity

- Time O(log n)
- Space O(1)

##### Code

```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let start = 0,
    end = nums.length - 1;

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);
    if (nums[middle] === target) {
      return middle;
    } else if (nums[middle] < target) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }

  return -1;
};
```
