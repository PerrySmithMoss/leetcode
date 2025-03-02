/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const m = new Map();

  for (let i = 0; i < nums.length; i++) {
    const requiredNum = target - nums[i];

    if (m.has(requiredNum)) {
      return [m.get(requiredNum), i];
    }

    m.set(nums[i], i);
  }
};
