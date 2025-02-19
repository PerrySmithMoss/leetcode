## 1. Two Sum

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

##### Example 1:

> **Input:** nums = [2,7,11,15], target = 9
> **Output:** [0,1] > **Explination:** Because nums[0] + nums[1] == 9, we return [0, 1].

##### Example 2:

> **Input:** nums = [3,2,4], target = 6
> **Output:** [1,2]

##### Example 3:

> **Input:** nums = [3,3], target = 6
> **Output:** [0,1]

###### Contraints:

- `2 <= nums.length <= 104`
- `109 <= nums[i] <= 109`
- `109 <= target <= 109`
- Only one valid answer exists.

> **Follow-up**: Can you come up with an algorithm that is less than `O(n2)` time complexity?
> **Answer**: The solution below has a time and space complexity of `O(n)`.

## Solution

First we initialize a hash table called `hash`, this hash table will store numbers from the `nums` array as the key and their index as the value. Next we iterate through the length of the `nums` array and check if the `target` minus the current element in the loop is a key in the `hash`. If the statement returns `false` we assign a key in the `hash` to the current element in the loop and set the value of that key to the index of the current element. If the statement returns `true` we can infer that when when said key and the current element are added together it will equal the target number. We can then return an array which contains that key's value (index of the number in `nums`) and the current index of the loop.

##### Complexity

- Time O(N)
- Space O(N)

##### Code

```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const hash = {};

  for (let i = 0; i < nums.length; i++) {
    if (target - nums[i] in hash) {
      return [hash[target - nums[i]], i];
    }

    hash[nums[i]] = i;
  }
};
```

```go
func twoSum(nums []int, target int) []int {
	m := make(map[int]int, len(nums))

	for i, num := range nums {
		if value, exists := m[target-num]; exists {
			return []int{i, value}
		}
		m[num] = i
	}
	return nil
}
```
