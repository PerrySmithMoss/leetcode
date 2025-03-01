## 242. Valid Anagram

Given two strings `s` and `t`, return `true` if `t` is an anagram of `s`, and `false` otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

##### Example 1:

> **Input:** s = "anagram", t = "nagaram" > **Output:** true

##### Example 2:

> **Input:** s = "rat", t = "car" > **Output:** false

###### Contraints:

- `1 <= nums.length <= 105`
- `s` and `t` consist of lowercase English letters.

> **Question**: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?
> **Answer**: As we're using hash maps to store the charaters in each string we can store as many values as needed, therefor we do not need to adapt the solution below.

## Solution

If both strings are not of the same length we can return `false` immediately. Otherwise we initialize two hash tables, one called `sVals` which will store the characters in `s` string and the number of occurrences that charater appears in the string, the second hash table `tVals` will store the characters in `t` string and the number of occurrences that charater appears in the string. The key in the hash table will represent the character of the string and the value will represent the number of occurrences that charater appears in the string. At this point in the code we know that both strings are of the same length, and therefor we only need to iterate through the length of one of those strings. Within each iteration we frist check the keys of the `sVals` hash table for the for the element and if that element exists we increment the value by one, otherwise the value becomes 1. We do the same process for `tVals` and `t` string. Lastely, we iterate through through the keys of `sVals` and if that key value pair is not contained inside `tVals` we know that `s` is not a valid anagram of `t` and we return `false`, otherwise we return `true`.

##### Complexity

- Time O(N)
- Space O(N)

##### Code

```javascript
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (t.length !== s.length) return false;

  const sVals = {};
  const tVals = {};

  for (let i = 0; i < s.length; i++) {
    const sChar = s[i];
    const tChar = t[i];

    sVals[sChar] = sVals[sChar] + 1 || 1;
    tVals[tChar] = tVals[tChar] + 1 || 1;
  }

  for (let i in sVals) {
    if (sVals[i] !== tVals[i]) return false;
  }
  return true;
};
```

```go
func isAnagram(s string, t string) bool {
	if len(s) != len(t) {
		return false
	}

	counts := make(map[rune]int)

	for _, char := range s {
		counts[char]++
	}
	for _, char := range t {
		counts[char]--
	}

	for _, count := range counts {
		if count != 0 {
			return false
		}
	}

	return true
}
```
