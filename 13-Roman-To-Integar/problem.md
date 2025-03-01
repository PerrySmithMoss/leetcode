## 13. Roman to Integer

Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol Value
I 1
V 5
X 10
L 50
C 100
D 500
M 1000

For example, `2` is written as `II` in Roman numeral, just two ones added together. `12` is written as `XII`, which is simply `X` + `II`. The number `27` is written as `XXVII`, which is `XX` + `V` + `II`.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not `IIII`. Instead, the number four is written as `IV`. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as `IX`. There are six instances where subtraction is used:

`I` can be placed before `V` (5) and `X` (10) to make 4 and 9.
`X` can be placed before `L` (50) and `C` (100) to make 40 and 90.
`C` can be placed before `D` (500) and `M` (1000) to make 400 and 900.

Given a roman numeral, convert it to an integer.

##### Example 1:

> **Input:** s = "III"
> **Output:** 3
> **Explination:** III = 3

##### Example 2:

> **Input:** s = "LVIII"
> **Output:** 58
> **Explination:** L = 50, V= 5, III = 3.

##### Example 3:

> **Input:** s = "MCMXCIV"
> **Output:** 1994
> **Explination:** M = 1000, CM = 900, XC = 90 and IV = 4.

###### Contraints:

- `1 <= s.length <= 15`
- `s` contains only the characters `('I', 'V', 'X', 'L', 'C', 'D', 'M')`.
- It is guaranteed that s is a valid roman numeral in the range `[1, 3999]`.

## Solution

Traverse the string from right to left, if the current value of the string is less than the previous value we know it's a special instance whereby subtraction is used, so we subtract the current value from the sum, otherwise we simply add the current value to the sum.

Programmatically, we would initiate a map, mapping each roman symbol to it's respected value and initiate two variables, one for the total sum and another to track the previous value:

```typescript
const numeralVals: Record<string, number> = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

let sum = 0;
let prevVal = 0;
```

We then initiate a loop starting at the last index of the string:

```typescript
for (let i = s.length - 1; i >= 0; i--)
```

Inside this loop we would check if the current string's symbolic value is less than the previous value, if it is we subtract the current value from the sum, otherwise we simply add the current value to the sum.

```typescript
const curChar = s[i];
const curVal = numeralVals[curChar];

if (curVal < prevVal) {
  sum -= curVal;
} else {
  sum += curVal;
}
```

at the end of each iteration we set the previous value to the current value, thus allowing us to keep track of the previous value.

```typescript
prevVal = curVal;
```

Then we simply just return the total sum.

```typescript
return sum;
```

##### Complexity

- Time O(N)
- Space O(N)

##### Code

```javascript
/**
 * @param {string} s
 * @return {number}
 */
function romanToInt(s: string): number {
  const numeralVals: Record<string, number> = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let sum = 0;
  let prevVal = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    const curChar = s[i];
    const curVal = numeralVals[curChar];

    if (curVal < prevVal) {
      sum -= curVal;
    } else {
      sum += curVal;
    }

    prevVal = curVal;
  }

  return sum;
}
```

```go
func romanToInt(s string) int {
	m := map[byte]int{
		'I': 1,
		'V': 5,
		'X': 10,
		'L': 50,
		'C': 100,
		'D': 500,
		'M': 1000,
	}

	total := 0
	n := len(s)

	for i := 0; i < n; i++ {
		if i < n-1 && m[s[i]] < m[s[i+1]] {
			total -= m[s[i]]
			continue
		}

		total += m[s[i]]
	}

	return total
}
```
