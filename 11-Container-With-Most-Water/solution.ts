/**
 * Two Pointers
 * Time is O(n) | Space O(1)
 * https://leetcode.com/problems/container-with-most-water/
 *
 * @param {number[]} height
 * @return {number}
 */
function maxArea(height: number[]): number {
  let left = 0;
  let right = height.length - 1;
  let maxHeight = 0;

  while (left < right) {
    const currArea = Math.min(height[left], height[right]) * (right - left);
    maxHeight = Math.max(maxHeight, currArea);

    if (height[left] <= height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxHeight;
}
