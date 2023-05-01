## 347. Top K Frequent Elements

Given an integer array `nums` and an integer `k`, return the `k` most frequent elements. You may return the answer in any order.

##### Example 1:

> Input: nums = [1,1,1,2,2,3], k = 2
> Output: [1,2]

##### Example 2:

> Input: nums = [1], k = 1
> Output: [1]

###### Contraints:

- `1 <= nums.length <= 105`
- `-104 <= nums[i] <= 104`
- `k` is in the range `[1, the number of unique elements in the array]`.
- It is guaranteed that the answer is unique.

## Solution

First we create the following variables, Number one - `frequencyMap`, this will store the frequency count of each number in the input array `nums`. Number two - `bucket`, this will group the numbers based on their frequency. Each index in the bucket array will correspond to the frequency of that number in the input array `nums`. Lastly, number three - `result`, this will hold the the most frequent numbers in order.

Next we iterate over each number in `nums` and store the frequency of each number.

After storing the frequency of each number in `freqMap`, we next iterate over the `freqMap` and for each entry we add the it to our bucket, with each index `i` in bucket corresponding to the frequency `i` of a number in the input array `nums`.

For our last loop we iterate over the the `bucket` data. We start from the end of the `bucket` because we want to get the most frequent numbers first. We push each element into our `result` until the size of the array reaches `k`.

Lastly, we return the `result` array, which hold our top `k` most frequent elements.

##### Complexity

- Time O(n)
- Space O(n)

##### Code

```javascript
/**
 * Hash Map & Bucket Array
 * Time is O(n) | Space O(n)
 * https://leetcode.com/problems/top-k-frequent-elements
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums: number[], k: number): number[] {
  const freqMap: Map<number, number> = new Map();
  const bucket: Set<number>[] = [];
  const result: number[] = [];

  for (let num of nums) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }

  for (let [num, freq] of freqMap) {
    bucket[freq] = (bucket[freq] || new Set()).add(num);
  }

  for (let i = bucket.length - 1; i >= 0; i--) {
    if (bucket[i]) result.push(...bucket[i]);
    if (result.length === k) break;
  }
  return result;
};
```

```javascript
/**
 * Hash Map
 * Time is O(nlogn) | Space O(n)
 * https://leetcode.com/problems/top-k-frequent-elements
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums: number[], k: number): number[] {
  const res = [];
  const map = new Map();

  nums.forEach((n) => map.set(n, map.get(n) + 1 || 1));

  const sortedArray = [...map.entries()].sort((a, b) => b[1] - a[1]);

  for (let i = 0; i < k; i++) {
    res.push(sortedArray[i][0]);
  }

  return res;
};
```
