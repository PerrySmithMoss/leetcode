## 238. Product of Array Except Self

Given an integer array `nums`, return an array `answer` such that `answer[i]` is equal to the product of all the elements of `nums` except `nums[i]`.

The product of any prefix or suffix of `nums` is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in `O(n)` time and without using the division operation.

##### Example 1:

> Input: nums = [1,2,3,4]
> Output: [24,12,8,6]

##### Example 2:

> Input: nums = [-1,1,0,-3,3]
> Output: [0,0,9,0,0]

###### Contraints:

- `2 <= nums.length <= 105`
- `-30 <= nums[i] <= 30`
- The product of any prefix or suffix of `nums` is guaranteed to fit in a 32-bit integer.

## Solution

First we create a new array `result` with the same length as `nums` and set the first element of `result` to 1 (since there are no elements to the left of the first element).

Next we iterate through `nums` from the second element to the last, for each element in `nums`, we set the corresponding element in result to the product of all the elements to it's left (which is stored in the previous position of result) and multiply it by the current element in `nums`.

Next we initialize a variable called `suffix` and we set it to 1. By initializing suffix to 1, we ensure that the first multiplication in the second pass effectively computes the product of all elements to the right of the last element. If we don't initialize suffix to 1, then the multiplication of result[i] by suffix in the first iteration of the second pass would be by a value that hasn't been set yet. Now we iterate through `nums` from the last element to the first. For each element in `nums`, we multiply it by `suffix` and store the result in the corresponding position in `result` and we update `suffix` by multiplying it by the current element in `nums`.

Lastely, we return the `result` array.

##### Complexity

- Time O(n)
- Space O(n)

##### Code

```javascript
/**
 * Prefix and Suffix
 * Time is O(n) | Space O(n)
 * https://leetcode.com/problems/product-of-array-except-self/
 *
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums: number[]): number[] {
  const result = new Array(nums.length);
  result[0] = 1;

  for (let i = 1; i < nums.length; i++) {
    result[i] = result[i - 1] * nums[i - 1];
  }

  let suffix = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= suffix;
    suffix *= nums[i];
  }

  return result;
};
```
