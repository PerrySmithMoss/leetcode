## 14. Longest Common Prefix

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

##### Example 1:

> **Input:** strs = ["flower","flow","flight"] > **Output:** "fl"

##### Example 2:

> **Input:** strs = ["dog","racecar","car"] > **Output:** ""
> **Explination:** There is no common prefix among the input strings.

###### Contraints:

- 1 <= strs.length <= 200
- 0 <= strs[i].length <= 200
- strs[i] consists of only lowercase English letters if it is non-empty.

## Solution

Loop through the array of strings, comparing the first string to the rest. Check if the current
prefix matches the beginning of each string. If a mismatch occurs, shorten the prefix by removing
its last character. If the prefix becomes empty, return an empty string immediately. Once the
loop completes, return the prefix, which now holds the longest common prefix among all strings in
the array.

In code we would:

1. Edge Case Handling:

   - If the input array is empty, return an empty string ("").

2. Initialize the Prefix:

   - Set prefix to the first string in the array (strs[0]).
   - This serves as the starting point for comparison.

3. Iterate Over the Strings:

   - Loop through the remaining strings in the array.
   - While the current string does not start with prefix, shorten prefix by removing its last character.
   - If prefix becomes empty, return "" immediately.

4. Return the Result:
   - After checking all strings, return the final value of prefix.

##### Complexity

- Time O(N × M) = N: Number of strings in the array. | M: Length of the longest string in the array.
- Space O(1)

##### Code

```typescript
/**
 * @param {string[]} strs
 * @return {string}
 */
function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 0) return "";

  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, -1);
      if (prefix === "") return "";
    }
  }
  return prefix;
}
```

```go
func longestCommonPrefix(strs: string[]): string {
  if (strs.length === 0) return "";

  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, -1);
      if (prefix === "") return "";
    }
  }
  return prefix;
}
```

```go
func longestCommonPrefixV2(strs []string) string {
	prefix := strs[0]
	for _, word := range strs {
		i := 0
		for ; i < len(word) && i < len(prefix) && prefix[i] == word[i]; i++ {
		}
		prefix = prefix[:i]
	}
	return prefix
}
```
