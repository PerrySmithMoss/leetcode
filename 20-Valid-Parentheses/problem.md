## 20. Valid Parentheses

Given a string `s` containing just the characters `'('`, `')'`, `'{'`, `'}'`, `'['` and `']'`, determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.

##### Example 1:

> **Input:** s = "()"
> **Output:** true

##### Example 2:

> **Input:** s = "()[]{}"
> **Output:** true

##### Example 3:

> **Input:** s = "(]"
> **Output:** false

###### Contraints:

- `1 <= s.length <= 104`
- `s` consists of parentheses only `'()[]{}'`.

## Solution

In this solution we first initialize an array, this array will be used as a stack data structure, for us to keep track of the order of brackets within the string `s`. Next we iterate through each character in `s`, if said character is one of the three opening parentheses (`(`, `{` or `[`) we push that characters closing parentheses onto the the stack. If the character is not one of the three opening parentheses we first pop the last element off the stack and if said element is not equal to the current character in the loop, we know that this is an incorrect match of parentheses and thus we can return `false`. Otherwise, if the stack is equal to zero we know `s` was a valid input string.

##### Complexity

- Time O(N)
- Space O(N)

##### Code

```javascript
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(")");
    } else if (s[i] === "{") {
      stack.push("}");
    } else if (s[i] === "[") {
      stack.push("]");
    } else if (stack.pop() !== s[i]) {
      return false;
    }
  }
  return stack.length === 0;
};
```
