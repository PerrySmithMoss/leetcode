## 15. 3Sum

Given an integer array nums, return all the triplets `[nums[i], nums[j], nums[k]]` such that `i != j`, `i != k`, and `j != k`, and `nums[i] + nums[j] + nums[k] == 0`.

Notice that the solution set must not contain duplicate triplets.

##### Example 1:

> Input: nums = [-1,0,1,2,-1,-4]
> Output: [[-1,-1,2],[-1,0,1]]
> Explanation:
> nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
> nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
> nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
> The distinct triplets are [-1,0,1] and [-1,-1,2].
> Notice that the order of the output and the order of the triplets does not matter.

##### Example 2:

> Input: nums = [0,1,1]
> Output: []
> Explanation: The only possible triplet does not sum up to 0.

##### Example 3:

> Input: nums = [0,0,0]
> Output: [[0,0,0]]
> Explanation: The only possible triplet sums up to 0.

###### Contraints:

- `3 <= nums.length <= 3000`
- `-105 <= nums[i] <= 105`

## Solution

The function begins by sorting the `nums` array in ascending order using the sort method. This is done because it will make removing duplicates easier later in the code.

The function initializes an empty array called `result`, which will store the triplets that sum up to zero.

The function starts a for loop that iterates over each element in the nums array. The loop variable `i` represents the current index.

Inside the loop, the function sets up two pointers, `low` and `high`, which are initially positioned just after the current element `(i+1)` and at the end of the array `(nums.length-1)`. Additionally, a variable `sum` is initialized to zero, this will be used to store the current sum of three elements.

The algorithm enters a while loop, which continues as long as the `low` pointer is less than the `high` pointer. This loop effectively finds all possible pairs of elements that, combined with the current element `(nums[i])`, sum up to zero. Within the while loop, the algorithm calculates the current sum by adding `nums[i]`, `nums[low]`, and `nums[high]`. If the sum is equal to zero `(sum === 0)`, it means that the current triplet satisfies the condition, so it is added to the `result` array.

After adding the triplet to the `result`, the algorithm performs two tasks:
- It increments the `low` pointer until it reaches the next unique number (skipping duplicates) by using a nested while loop.
- It decrements the `high` pointer until it reaches the next unique number (skipping duplicates) by using another nested while loop.
- Both `low` and `high` are then incremented and decremented, respectively, to continue searching for more triplets.

If the `sum` is less than zero `(sum < 0)`, it means the current triplet needs a larger value, so the `low` pointer is incremented.

If the `sum` is greater than zero, it means the current triplet needs a smaller value, so the `high` pointer is decremented.

After the while loop ends, the outer for loop continues by incrementing the `i` variable until the next unique number (skipping duplicates) is found. This is achieved by using another nested while loop.

Finally, when all iterations are complete, the function returns the `result` array containing all unique triplets that `sum` up to zero.

In summary, this algorithm uses the two-pointer technique to find unique triplets that sum up to zero. By sorting the array first, it ensures that duplicate elements are skipped during the iteration, which helps avoid duplicate triplets in the result.

##### Complexity

- Time O(n^2)
- Space O(1)

##### Code

```javascript
/**
 * Two Pointers
 * Time is O(n^2) | Space O(n)
 * https://leetcode.com/problems/3sum
 *
 * @param {number[]} nums
 * @return {number[]}
 */
var threeSum = function (nums: number[]): number[][] {
  nums.sort((a, b) => a - b);
  const result: number[][] = [];

  for (let i = 0; i < nums.length; i++) {
    let low = i + 1,
      high = nums.length - 1,
      sum = 0;

    while (low < high) {
      sum = nums[i] + nums[low] + nums[high];

      if (sum === 0) {
        result.push([nums[i], nums[low], nums[high]]);
        while (nums[low + 1] === nums[low]) low++;
        while (nums[high - 1] === nums[high]) high--;
        low++;
        high--;
      } else if (sum < 0) low++;
      else high--;
    }
    while (nums[i + 1] === nums[i]) i++;
  }
  return result;
};
```
