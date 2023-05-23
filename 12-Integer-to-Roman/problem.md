## 15. 3Sum

Roman numerals are represented by seven different symbols: `I`, `V`, `X`, `L`, `C`, `D` and `M`.

`Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000`

For example, `2` is written as `II` in Roman numeral, just two one's added together. `12` is written as `XII`, which is simply `X + II`. The number `27` is written as `XXVII`, which is `XX + V + II`.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not `IIII`. Instead, the number four is written as `IV`. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as `IX`. There are six instances where subtraction is used:

- `I` can be placed before `V` (5) and `X` (10) to make 4 and 9. 
- `X` can be placed before `L` (50) and `C` (100) to make 40 and 90. 
- `C` can be placed before `D` (500) and `M` (1000) to make 400 and 900.

Given an integer, convert it to a roman numeral.

##### Example 1:

> Input: num = 3
> Output: "III"
> Explanation: 3 is represented as 3 ones.

##### Example 2:

> Input: num = 58
> Output: "LVIII"
> Explanation: L = 50, V = 5, III = 3.

##### Example 3:

> Input: num = 1994
> Output: "MCMXCIV"
> Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

###### Contraints:

- `1 <= num <= 3999`

## Solution

The algorithm takes an input number `num` and initializes an empty string `res` to store the resulting Roman numeral.

It enters a loop that iterates over each numeral in the `numerals` object.

Inside the loop, the algorithm retrieves the current numeral's value from the `numerals` object and assigns it to the `value` variable.

The algorithm enters a while loop, which continues as long as the input number `num` is greater than or equal to the current numeral's value.

Within the while loop, the algorithm subtracts the current numeral's value from the input number `num`, effectively "consuming" that portion of the number.

The algorithm appends the current numeral to the resulting string `res`.

The while loop continues until the value of `num` is no longer greater than or equal to the current numeral's value. At this point, it moves on to the next numeral in the loop.

Once the loop has iterated through all the numerals and the while loops for each numeral have completed, the algorithm returns the resulting string `res`, which represents the Roman numeral equivalent of the input number.

The `numerals` object serves as a lookup table, mapping each Roman numeral to its corresponding value. The algorithm iterates through the numerals in descending order of value, from the largest to the smallest. It repeatedly subtracts the largest possible value from the input number `num` and appends the corresponding numeral to the result string `res`. This process continues until `num` becomes zero, indicating that the entire number has been converted to Roman numerals.

Overall, the algorithm uses a greedy approach to convert an input number into its Roman numeral representation efficiently.

##### Complexity

- Time O(log(n))
- Space O(1)

##### Code

```javascript
/**
 * Hash Map/Lookup Table & Greedy approach
 * Time is O(log(n)) | Space O(1)
 * https://leetcode.com/problems/integer-to-roman/description/
 *
 * @param {number} num
 * @return {string}
 */
function intToRoman(num: number): string {
  let res = "";

  for (const numeral in numerals) {
    const value = numerals[numeral];
    while (num >= value) {
      num -= value;
      res += numeral;
    }
  }

  return res;
}

const numerals: { [key: string]: number } = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};
```
