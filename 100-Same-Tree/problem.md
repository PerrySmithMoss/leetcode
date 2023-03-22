## 100. Same Tree

Given the roots of two binary trees `p` and `q`, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

##### Example 1:

> **Input:** p = [1,2,3], q = [1,2,3] > **Output:** true

##### Example 2:

> **Input:** p = [1,2], q = [1,null,2] > **Output:** false

##### Example 3:

> **Input:** p = [1,2,1], q = [1,1,2] > **Output:** false

###### Contraints:

- The number of nodes in the tree is in the range `[0, 100]`.
- `-104 <= Node.val <= 104`

## Solution

As you can see below, I have a conventional iterative depth-first search (DFS) approach, but I also have a cool trick you can use with JSON.stringify. With the DFS approach, we first initialize a `stack` and push the `p` and `q` trees onto that stack. We then create a while loop which will continue running until the `stack` is empty. Inside the loop we first pop the `p` node off the stack and hold that in a variable called `qNode` and then pop the `q` node off the stack and hold that in a variable called `pNode`. If the `pNode` and `qNode` are both `null` we know that the tree is the same so we return `true`. If the `pNode` or `qNode` is `null` we know that the tree is not the same so we return `false`. If the `pNode` value is not equal to the `qNode` value we know the tree is not the same so we return `false`. Lastely, we check the if the left or right of both `pNode` and `qNode` exists, if either value exists we push it onto the stack. 

##### Complexity

- Time O(n)
- Space O(n)

##### Code

```javascript
/**
 * Definition for a binary tree node.
 */
class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

/**
 * DFS (Iterative)
 *
 * @param {TreeNode | null} p
 * @param {TreeNode | null} q
 * @return {boolean}
 */
var isSameTreeDFS = function (p, q) {
  const stack = [p, q];

  while (s.length) {
    const qNode = s.pop();
    const pNode = s.pop();

    if (!pNode && !qNode) return true;
    if (!pNode || !qNode) return false;
    if (pNode.val !== qNode.val) return false;

    if (pNode.left || qNode.left) stack.push(pNode.left, qNode.left);
    if (pNode.right || qNode.right) stack.push(pNode.right, qNode.right);
  }
  return true;
};

/**
 * JSON.stringify trick
 *
 * @param {TreeNode | null} p
 * @param {TreeNode | null} q
 * @return {boolean}
 */
var isBalanced = function (p, q) {
  return JSON.stringify(p) === JSON.stringify(q);
};
```
