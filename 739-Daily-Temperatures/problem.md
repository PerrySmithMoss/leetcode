## 150. Evaluate Reverse Polish Notation

Given an array of integers `temperatures` represents the daily temperatures, return an array `answer` such that `answer[i]` is the number of days you have to wait after the `ith` day to get a warmer temperature. If there is no future day for which this is possible, keep `answer[i] == 0` instead.

##### Example 1:

> Input: temperatures = [73,74,75,71,69,72,76,73]
> Output: [1,1,4,2,1,1,0,0]

##### Example 2:

> Input: temperatures = [30,40,50,60]
> Output: [1,1,1,0]

##### Example 3:

> Input: temperatures = [30,60,90]
> Output: [1,1,0]

###### Contraints:

- 1 <= temperatures.length <= 105
- 30 <= temperatures[i] <= 100

## Solution

The algorithm takes an input array `temperatures`, which represents daily temperatures.

It initializes two arrays: `res` and `stack`. The `res` array will store the number of days until a warmer temperature is encountered, and it is initialized with zeroes using the Array.fill() method. The `stack` array will simulate a stack data structure.

The algorithm starts iterating over the `temperatures` array in reverse order, starting from the last index (`i = temperatures.length - 1`) and going backwards to the first index (`i = 0`).

Inside the loop, the algorithm enters a while loop that continues as long as the `stack` is not empty and the current temperature (`temperatures[i]`) is greater than or equal to the temperature represented by the index at the top of the `stack` (`temperatures[stack[stack.length - 1]]`).

The purpose of the while loop is to compare the current temperature with the `temperatures` represented by the indices in the `stack`. It pops elements from the `stack` as long as the current temperature is greater than or equal to the temperature represented by the index at the top of the `stack`. This step helps to find the first warmer temperature encountered for each day.

If the `stack` is not empty after the while loop, it means that a warmer temperature was found. The algorithm calculates the number of days until the next warmer temperature by subtracting the current index (`i`) from the index at the top of the `stack` (`stack[stack.length - 1]`). This value is stored in the corresponding index of the `res` array.

Finally, the current index (`i`) is pushed onto the `stack`.

After iterating through all the `temperatures`, the algorithm returns the `res` array, which contains the number of days until a warmer temperature is encountered for each day.

The algorithm uses a stack to keep track of indices with `temperatures` that haven't encountered a warmer temperature yet. By iterating in reverse order, it ensures that the algorithm processes each temperature and finds the first warmer temperature encountered after each day.

##### Complexity

- Time O(n)
- Space O(n)

##### Code

```javascript
/**
 * Stack
 * Time is O(n) | Space O(n)
 * https://leetcode.com/problems/daily-temperatures
 *
 * @param {number[]} temperatures
 * @return {number[]}
 */
function dailyTemperatures(temperatures: number[]): number[] {
  const res = new Array(temperatures.length).fill(0);
  const stack = [];

  for (let i = temperatures.length - 1; i >= 0; i--) {
    while (
      stack.length &&
      temperatures[i] >= temperatures[stack[stack.length - 1]]
    ) {
      stack.pop();
    }
    if (stack.length) {
      res[i] = stack[stack.length - 1] - i;
    }
    stack.push(i);
  }
  return res;
}
```
