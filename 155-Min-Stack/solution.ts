/**
 * Stack
 * Time is O(1) | Space O(1)
 * https://leetcode.com/problems/min-stack
 *
 * @param {number[]} nums
 * @return {number[]}
 */
class MinStack {
  stack: { val: number; minVal: number }[];
  constructor() {
    this.stack = [];
  }

  push(val: number): void {
    this.stack.push({
      val: val,
      minVal: this.stack.length === 0 ? val : Math.min(val, this.getMin()),
    });
  }

  pop(): void {
    this.stack.pop();
  }

  top(): number {
    return this.stack[this.stack.length - 1].val;
  }

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
