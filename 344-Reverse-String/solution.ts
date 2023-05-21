/**
 Do not return anything, modify s in-place instead.
 *
 * Two Pointers
 * Time is O(n) | Space O(1)
 * https://leetcode.com/problems/min-stack
 *
 * @param {number[]} s
 */
function reverseString(s: string[]): void {
  let p1 = 0;
  let p2 = s.length - 1;

  while (p1 <= p2) {
    const tempLeft = s[p1];
    s[p1] = s[p2];
    s[p2] = tempLeft;

    p1++;
    p2--;
  }
}
