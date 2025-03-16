/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let maxWater = 0,
    left = 0,
    right = height.length - 1;

  while (left < right) {
    let width = right - left;
    let minHeight = Math.min(height[left], height[right]);
    let area = width * minHeight;
    maxWater = Math.max(maxWater, area);

    // Move the pointer that has the smaller height
    if (height[left] < height[right]) left++;
    else right--;
  }

  return maxWater;
};
