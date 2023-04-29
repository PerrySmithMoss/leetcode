## 49. Group Anagrams

Given an array of strings `strs`, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

##### Example 1:

> Input: strs = ["eat","tea","tan","ate","nat","bat"]
> Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

##### Example 2:

> Input: strs = [""]
> Output: [[""]]

##### Example 3:

> Input: strs = ["a"]
> Output: [["a"]]

###### Contraints:

- `1 <= strs.length <= 104`
- `0 <= strs[i].length <= 100`
- `strs[i]` consists of lowercase English letters.

## Solution

We first create an empty object called `hash`, this will be used to store our anagrams. Next we loop through each string in the input `strs` array. For each string, we sort the characters in alphabetical order and store it in a variable called `sortedWord`. We check the `hash` to see if it contains a key equal to `sortedWord`. If hash does not contain `sortedWord` as a key, create a new property in `hash` with `sortedWord` as the key and an array containing the original `word` as its value. If hash already contains `sortedWord` as a key, we push the `word` into the array of values associated with `sortedWord`. After all the strings have been processed, we convert the values of `hash` into an array, thus returning the array of arrays of anagrams.

##### Complexity

- Time O(n k log k)
- Space O(n)

##### Code

```javascript
/**
 * Hash Table
 * Time is O(n k log k) | Space O(n)
 * https://leetcode.com/problems/group-anagrams
 *
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs: string[]): string[][] {
  const hash: { [key: string]: string[] } = {};

  for (let i = 0; i < strs.length; i++) {
    const word = strs[i];
    const sortedWord = word.split("").sort().join("");

    if (!hash[sortedWord]) {
      hash[sortedWord] = [word];
    } else {
      hash[sortedWord].push(word);
    }
  }
  return Object.values(hash);
};
```
