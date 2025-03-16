/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums.sort((a, b) => a - b);

  const res = [];

  // loop each number
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue; // Skip duplicate values for i

    let left = i + 1,
      right = nums.length - 1;

    // assume i is first number and use two pointers to find the other possible sum values
    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];

      if (sum < 0) left++; // increase sum
      else if (sum > 0) right--; // decrease sum
      else {
        res.push([nums[i], nums[left], nums[right]]);

        while (left < right && nums[left] === nums[left + 1]) left++; // Skip duplicates
        while (left < right && nums[right] === nums[right - 1]) right--; // Skip duplicates

        left++;
        right--;
      }
    }
  }
  return res;
};
