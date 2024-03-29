/**
 * Two Pointers
 * Time is O(n) | Space O(1)
 * https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
 *
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
function twoSum(numbers: number[], target: number) {
  let p1 = 0;
  let p2 = numbers.length - 1;

  while (p1 < p2) {
    let sum = numbers[p1] + numbers[p2];
    if (sum > target) {
      p2--;
    } else if (sum < target) {
      p1++;
    } else {
      return [p1 + 1, p2 + 1];
    }
  }
}
