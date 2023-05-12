## 238. Product of Array Except Self

Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

Implement the `MinStack` class:

- `MinStack() initializes the stack object.`
- `void push(int val) pushes the element val onto the stack.`
- `void pop() removes the element on the top of the stack.`
- `int top() gets the top element of the stack.`
- `int getMin() retrieves the minimum element in the stack.`
- `You must implement a solution with O(1) time complexity for each function.`

##### Example 1:

> Input
["MinStack","push","push","push","getMin","pop","top","getMin"]
[[],[-2],[0],[-3],[],[],[],[]]

> Output
[null,null,null,null,-3,null,0,-2]

> Explanation
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin(); // return -3
minStack.pop();
minStack.top();    // return 0
minStack.getMin(); // return -2

###### Contraints:

- `-231 <= val <= 231 - 1`
- Methods `pop`, `top` and `getMin` operations will always be called on non-empty stacks.
- At most `3 * 104` calls will be made to `push`, `pop`, `top`, and `getMin`.

## Solution

The class `MinStack` is defined with a single property: `stack`, which will contain an array of objects. Each object in the `stack` array has two properties: `val` and `minVal`.

The `constructor()` method initializes the `stack` property to an empty array.

The `push(val: number)` method takes a number `val` as its input and adds a new object to the stack array with `val` as it's `val` property and the minimum value in the stack as its `minVal` property. If the `stack` is empty, the minimum value is simply the value being added. Otherwise, the minimum value is the minimum of the current `val` and the minimum value of the previous element in the stack.

The `pop()` method removes the last element from the `stack` array.

The `top()` method returns the `val` property of the last element in the `stack` array, which is the element on top of the `stack`.

The `getMin()` method returns the `minVal` property of the last element in the `stack` array, which is the minimum value in the `stack`.

##### Complexity

- Time O(1)
- Space O(n)

##### Code

```javascript
/**
 * Prefix and Suffix
 * Time is O(n) | Space O(n)
 * https://leetcode.com/problems/product-of-array-except-self/
 *
 * @param {number[]} nums
 * @return {number[]}
 */
/**
 * Stack
 * Time is O(1) | Space O(n)
 * https://leetcode.com/problems/min-stack
 *
 * @param {number[]} nums
 * @return {number[]}
 */
class MinStack {
  //   Time is O(1) | Space O(n)
  stack: { val: number; minVal: number }[];
  constructor() {
    this.stack = [];
  }

  //   Time is O(1) | Space O(1)
  push(val: number): void {
    this.stack.push({
      val: val,
      minVal: this.stack.length === 0 ? val : Math.min(val, this.getMin()),
    });
  }

  //   Time is O(1) | Space O(1)
  pop(): void {
    this.stack.pop();
  }

  //   Time is O(1) | Space O(1)
  top(): number {
    return this.stack[this.stack.length - 1].val;
  }

  //   Time is O(1) | Space O(1)
  getMin(): number {
    return this.stack[this.stack.length - 1].minVal;
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
```
