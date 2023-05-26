## 150. Evaluate Reverse Polish Notation

You are given an array of strings `tokens` that represents an arithmetic expression in a Reverse Polish Notation.

Evaluate the expression. Return an integer that represents the value of the expression.

Note that:

- The valid operators are `'+'`, `'-'`, `'*'`, and `'/'`.
- Each operand may be an integer or another expression.
- The division between two integers always truncates toward zero.
- There will not be any division by zero.
- The input represents a valid arithmetic expression in a reverse polish notation.
- The answer and all the intermediate calculations can be represented in a 32-bit integer.

##### Example 1:

> Input: tokens = ["2","1","+","3","*"]
> Output: 9
> Explanation: ((2 + 1) \* 3) = 9

##### Example 2:

> Input: tokens = ["4","13","5","/","+"]
> Output: 6
> Explanation: (4 + (13 / 5)) = 6

##### Example 3:

> Input: tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
> Output: 22
> Explanation: ((10 _ (6 / ((9 + 3) _ -11))) + 17) + 5
> = ((10 _ (6 / (12 _ -11))) + 17) + 5
> = ((10 _ (6 / -132)) + 17) + 5
> = ((10 _ 0) + 17) + 5
> = (0 + 17) + 5
> = 17 + 5
> = 22

###### Contraints:

- `1 <= tokens.length <= 104`
- `tokens[i]` is either an operator: `'+'`, `'-'`, `'*'`, and `'/'`, or an integer in the range `[-200, 200]`.

## Solution

First, the solution initializes two arrays: `operators` containing the four arithmetic operators ("+", "-", "\*", "/"), and `stack` to simulate a stack data structure, eventually used to store the intermediate results.

Next, the algorithm iterates over each token in the `tokens` array. Inside the loop, the algorithm checks if the current `token` is one of the four operators by using the includes() method on the operators array. If the `token` is an operator, it performs the corresponding arithmetic operation. To perform the operation, the algorithm pops the last two elements from the `stack` array and converts them to numbers `num2` and `num1`.

The algorithm then uses a switch statement on the current token to determine which operation to perform based on the operator.

If the `token` is "+" (addition), the algorithm adds `num1` and `num2` and pushes the result back to the `stack`.

If the `token` is "-" (subtraction), the algorithm subtracts `num2` from `num1` and pushes the result to the `stack`.

If the `token` is "\*" (multiplication), the algorithm multiplies `num1` and `num2` and pushes the result to the `stack`.

If the `token` is "/" (division), the algorithm divides `num1` by `num2` and rounds down the result. The rounded result is then pushed to the `stack`.

If the current `token` is not an operator, it is assumed to be a number, and the algorithm pushes the token (converted to a string) to the `stack`.

After iterating through all the `tokens`, the `stack` will contain the final result of the RPN expression. The algorithm parses the first element of the `stack` into an integer and returns it as the result of the evaluation.

The algorithm essentially evaluates the given RPN expression by simulating a `stack` data structure. It performs the arithmetic operations based on the operators encountered in the expression and pushes the intermediate results back to the `stack`. Finally, it returns the final result obtained from the `stack`.

##### Complexity

- Time O(n)
- Space O(n)

##### Code

```javascript
/**
 * Stack
 * Time is O(n) | Space O(n)
 * https://leetcode.com/problems/evaluate-reverse-polish-notation
 *
 * @param {string[]} tokens
 * @return {number}
 */
function evalRPN(tokens: string[]): number {
  const operators: string[] = ["+", "-", "*", "/"];
  const stack: string[] = [];

  for (const token of tokens) {
    if (operators.includes(token.toString())) {
      const num2: number = Number(stack.pop()!);
      const num1: number = Number(stack.pop()!);

      switch (token as keyof typeof operators) {
        case operators[0]:
          stack.push(String(num1 + num2));
          break;
        case operators[1]:
          stack.push(String(num1 - num2));
          break;
        case operators[2]:
          stack.push(String(num1 * num2));
          break;
        case operators[3]:
        stack.push(String(Math.floor(num1 / num2)));
          break;
      }
    } else stack.push(token.toString());
  }

  return parseInt(stack[0]);
};
```
