## 15. 3Sum

You are given an integer array `height` of length `n`. There are `n` vertical lines drawn such that the two endpoints of the `ith` line are `(i, 0)` and `(i, height[i])`.

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.

##### Example 1:

> Input: height = [1,8,6,2,5,4,8,3,7]
> Output: 49
> Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

##### Example 2:

> Input: height = [1,1]
> Output: 1

###### Contraints:

- `n == height.length`
- `2 <= n <= 105`
- `0 <= height[i] <= 104`

## Solution

The algorithm takes an input array `height` representing the heights of vertical lines in a histogram.

It initializes two pointers, `left` and `right`, to the beginning and end of the array. It also initializes a variable `maxHeight` to keep track of the maximum area found so far.

The algorithm enters a while loop, which continues as long as the `left` pointer is less than the `right` pointer.

Inside the loop, the algorithm calculates the area between the lines represented by the heights at the `left` and `right` indices. It does this by finding the minimum height between the two lines and multiplying it by the distance between the indices `(right - left)`.

The algorithm updates the `maxHeight` variable by taking the maximum value between the current `maxHeight` and the calculated `currArea`.

Next, the algorithm checks if the height at the `left` index is less than or equal to the height at the `right` index. If true, it means that the height at the `left` index is smaller or equal, and moving the `left` pointer inward could potentially result in a higher area. In this case, the `left` pointer is incremented by one.

If the height at the `left` index is greater than the height at the `right` index, the algorithm moves the `right` pointer inward by decrementing it by one. This is because moving the `right` pointer would have a higher chance of increasing the area.

The loop continues to iterate, adjusting the pointers and updating the `maxHeight` until the `left` and `right` pointers meet or cross each other.

Once the pointers meet, the algorithm exits the loop, and the maximum area `(maxHeight)` between two vertical lines in the histogram is returned.

The algorithm effectively finds the maximum area by utilizing the two-pointer approach and greedily selecting the pointers that have the potential to maximize the area. By moving the pointer associated with the smaller height, the algorithm explores different configurations and finds the maximum possible area efficiently.

##### Complexity

- Time O(n)
- Space O(1)

##### Code

```javascript
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
```
