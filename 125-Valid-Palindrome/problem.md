## 125. Valid Palindrome

A phrase is a **palindrome** if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string `s`, return `true` if it is a **palindrome**, or `false` otherwise.

##### Example 1:

> **Input:** s = "A man, a plan, a canal: Panama"
> **Output:** true
> **Explination:** "amanaplanacanalpanama" is a palindrome.

##### Example 2:

> **Input:** s = "race a car"
> **Output:** false
> **Explination:** "raceacar" is not a palindrome.

##### Example 3:

> **Input:** s = " "
> **Output:** true
> **Explination:** s is an empty string "" after removing non-alphanumeric characters.
> Since an empty string reads the same forward and backward, it is a palindrome.

###### Contraints:

- 1 <= s.length <= 2 * 105
- s consists only of printable ASCII characters.

## Solution

First we convert all the characters in the stringto lowercase using the `toLowerCase()` method. We then replace all non non-alphanumeric characters with an empty string. This is done by passing he following RegEx `/[^a-z\d]/gi` as the the first argument to the `replace()` method. This RegEx serves as a pattern, whereby any parts of the string that match it will be replaced with the string you pass in as the second argument.

Next we initialize a loop and create two pointers, one called `i` which will initially point to the first character's index in the `str`, and `j` which will initially point to the last character's index in the `str`. Both pointers will move inward on the `str` until `i` passes `j`. If the current character of `i` is not equal to the current character of `j` we return `false`, as both characters need need to be the same for it to remain a palindrome

##### Complexity

- Time O(N)
- Space O(N)

##### Code

```javascript
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let cleanString = s.toLowerCase().replace(/[^a-z\d]/gi, "");

  for (let i = 0, j = cleanString.length - 1; i < j; i++, j--) {
    if (cleanString[i] !== cleanString[j]) {
      return false;
    }
  }

  return true;
};
```
