/**
 * Binary Search
 * Time O(log n) | Space O(1)
 * https://leetcode.com/problems/binary-search/
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
function search(nums: number[], target: number): number {
  let start = 0,
      end = nums.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (nums[mid] == target) {
      return mid;
    } else if (nums[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return -1;
}

/**
 * Binary Search / Recursion
 * Time O(log n) | Space O(log n)
 * https://leetcode.com/problems/binary-search/
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
function searchWithRecursion(nums: number[], target: number): number {
  let start = 0,
      end = nums.length - 1;

  return findNum(nums, target, start, end);
}

function findNum(
  arr: number[],
  target: number,
  start: number,
  end: number
): number {
  if (start > end) {
    return -1;
  }

  const mid = Math.floor((start + end) / 2);

  if (arr[mid] === target) {
    return mid;
  }

  if (arr[mid] > target) {
    return findNum(arr, target, start, mid - 1);
  }

  if (arr[mid] < target) {
    return findNum(arr, target, mid + 1, end);
  }

  return -1;
}
