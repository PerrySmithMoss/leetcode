## 344. Reverse String

Write a function that reverses a string. The input string is given as an array of characters `s`.

You must do this by modifying the input array in-place with `O(1)` extra memory.

##### Example 1:

> Input: s = ["h","e","l","l","o"]
> Output: ["o","l","l","e","h"]

##### Example 1:

> Input: s = ["H","a","n","n","a","h"]
> Output: ["h","a","n","n","a","H"]

###### Contraints:

- `1 <= s.length <= 105`
- `s[i]` is a printable ascii character.

## Solution

The function initializes two pointers, `p1` and `p2`, at the beginning and end of the input array respectively. The value of `p1` is set to `0`, and the value of `p2` is set to `s.length - 1`. These pointers represent the indices of the elements that will be swapped.

The function enters a while loop that continues until `p1` becomes greater than or equal to `p2`. This condition ensures that the swapping process stops when the pointers meet or cross each other.

Inside the loop, the function uses a temporary variable called `tempLeft` to store the value at index `p1` of the input array `s`.

The value at index `p1` of `s` is then replaced with the value at index `p2` of `s`, effectively swapping the elements.

Next, the value at index `p2` of `s` is assigned the value stored in `tempLeft`, completing the swap.

Finally, after the swap, the function increments `p1` by 1 (moving it to the right) and decrements `p2` by 1 (moving it to the left), preparing for the next iteration of the loop.

The loop continues until `p1` becomes greater than or equal to `p2`, at which point the function exits.

By swapping the elements from the start and end of the array and gradually moving towards the middle, the algorithm effectively reverses the order of the strings in the input array `s`.

##### Complexity

- Time O(n)
- Space O(1)

##### Code

```javascript
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

  while (p1 < p2) {
    const tempLeft = s[p1];
    s[p1] = s[p2];
    s[p2] = tempLeft;

    p1++;
    p2--;
  }
}
```
