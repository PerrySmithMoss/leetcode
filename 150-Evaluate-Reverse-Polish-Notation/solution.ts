/**
 * @param {string[]} tokens
 * @return {number}
 */
function evalRPN(tokens: number[]): number {
  const operators: string[] = ["+", "-", "*", "/"];
  const stack: string[] = [];

  for (const token of tokens) {
    if (operators.includes(token.toString())) {
      const num2 = Number(stack.pop());
      const num1 = Number(stack.pop());

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
}
