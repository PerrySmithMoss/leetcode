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
