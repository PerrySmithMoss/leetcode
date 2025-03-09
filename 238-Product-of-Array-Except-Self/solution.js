/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const res = new Array(nums.length);
  res[0] = 1;

  // calculate the product of all the numbers to to left of nums[i]
  for (let i = 1; i < nums.length; i++) {
    res[i] = res[i - 1] * nums[i - 1];
  }

  let suffix = 1;

  // calculate the product of all the numbers to the right of nums[i].
  // This is done by using a 'suffix' to keep track of the product
  //   of all elements to the right of nums[i]
  for (let i = res.length - 1; i >= 0; i--) {
    res[i] *= suffix;
    suffix *= nums[i];
  }

  return res;
};

productExceptSelf([1, 2, 3, 4]);
