## 217. Contains Duplicate

Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct. <a href="https://leetcode.com/problems/contains-duplicate/submissions/902861917" rel="noreferrer" target="_blank" >Leetcode</a>.

##### Example 1:

> **Input:** nums = [1,2,3,1] > **Output:** true

##### Example 2:

> **Input:** nums = [1,2,3,4] > **Output:** false

##### Example 3:

> **Input:** nums = [1,1,1,3,3,4,3,2,4,2] > **Output:** true

###### Contraints:

- 1 <= nums.length <= 105
- -109 <= nums[i] <= 109

## Solution

We can leverage the `Set` data structure and it's ability to store unique values. As we iterate through the array we return true if the element exists in the set, otherwise we add the element to the set. If no element is found in the set we return false.

##### Complexity

- Time O(N)
- Space O(N)

##### Code

```javascript
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const set = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (!set.has(nums[i])) {
      set.add(nums[i]);
    } else return true;
  }
  return false;
};
```

```go
func containsDuplicate(nums []int) bool {
	m := make(map[int]bool, len(nums))

	for i := 0; i < len(nums); i++ {
		_, ok := m[nums[i]]
		if ok {
			return true
		}
		m[nums[i]] = true
	}
	return false
}
```
