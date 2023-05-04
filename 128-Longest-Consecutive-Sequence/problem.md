## 128. Longest Consecutive Sequence

Given an unsorted array of integers `nums`, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in `O(n)` time.

##### Example 1:

> Input: nums = [100,4,200,1,3,2]
> Output: 4
> Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

##### Example 2:

> Input: nums = [0,3,7,2,5,8,4,6,0,1]
> Output: 9

###### Contraints:

- `0 <= nums.length <= 105`
- `-109 <= nums[i] <= 109`

## Solution

We start by initializing a `Map` to keep track of the length of consecutive sequences.

We iterate through each number in the array, and for each number, we check if it's already in the `Map`. If it is, we move on to the next number. If it isn't, we start constructing a new consecutive sequence.

We first get the lengths of the consecutive sequences to the left and right of the current number (if they exist) in the `Map`.

We then calculate the total length of the consecutive sequence that includes the current number by adding 1 (for the current number) to the left and right lengths.

We update the `Map` to include the current number and it's total length, we also update the lengths of the sequences to the left and right of the current number to also include the current number.

Finally, we update a `count` variable to keep track of the length of the longest consecutive sequence we've seen so far.

Once we've iterated through all the numbers in the array, we return the `count`.

##### Complexity

- Time O(n)
- Space O(n)

##### Code

```javascript
/**
 * Hash Table
 * Time is O(n) | Space O(n)
 * https://leetcode.com/problems/longest-consecutive-sequence/
 *
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums: number[]): number {
  const map: Map<number, number> = new Map();
  let count = 0;

  for (let num of nums) {
    if (map.has(num)) continue;

    const leftLength = map.get(num - 1) || 0;
    const rightLength = map.get(num + 1) || 0;
    const totalLength = leftLength + rightLength + 1;

    map.set(num, totalLength);
    count = Math.max(count, totalLength);

    map.set(num - leftLength, totalLength);
    map.set(num + rightLength, totalLength);
  }

  return count;
};
```
