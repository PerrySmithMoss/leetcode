## 412. Fizz Buzz

Given an integer n, return a string array answer (1-indexed) where:

answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
answer[i] == "Fizz" if i is divisible by 3.
answer[i] == "Buzz" if i is divisible by 5.
answer[i] == i (as a string) if none of the above conditions are true.

##### Example 1:

> Input: n = 3
> Output: ["1","2","Fizz"]

##### Example 2:

> Input: n = 5
> Output: ["1","2","Fizz","4","Buzz"]

##### Example 3:

> Input: n = 15
> Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]

###### Contraints:

- `1 <= n <= 104`

## Solution

This might be the easiest 'problem' on Leetcode?! Simply loop `n` times and check for each of the possible scenarios, pushing the answer each time into a results array and then finally returning the results array once the loop has finished.

##### Complexity

- Time O(n)
- Space O(n)

##### Code

```javascript
/**
 * Time is O(n) | Space O(n)
 * https://leetcode.com/problems/fizz-buzz/submissions/1571823792/
 * @param {number} num
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  let res = [];

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) res.push("FizzBuzz");
    else if (i % 3 === 0) res.push("Fizz");
    else if (i % 5 === 0) res.push("Buzz");
    else res.push(`${i}`);
  }

  return res;
};
```

```typescript
function fizzBuzz(n: number): string[] {
  let res: string[] = [];

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) res.push("FizzBuzz");
    else if (i % 3 === 0) res.push("Fizz");
    else if (i % 5 === 0) res.push("Buzz");
    else res.push(`${i}`);
  }

  return res;
}
```

```go
package main

import "strconv"

func fizzBuzz(n int) []string {
	res := make([]string, n)

	for i := 1; i <= n; i++ {
		if i%3 == 0 && i%5 == 0 {
			res[i-1] = "FizzBuzz"
		} else if i%3 == 0 {
			res[i-1] = "Fizz"
		} else if i%5 == 0 {
			res[i-1] = "Buzz"
		} else {
			res[i-1] = strconv.Itoa(i)
		}
	}

	return res
}
```
