## 104. Maximum Depth of Binary Tree

Given the `root` of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

##### Example 1:

> **Input:** root = [3,9,20,null,null,15,7] 
> **Output:** 3

##### Example 2:

> **Input:** root = [1,null,2]
> **Output:** 2

###### Contraints:

- The number of nodes in the tree is in the range `[0, 104]`.
- `-100 <= Node.val <= 100`

## Solution

As you an see below I have three solutions to this problem, 1. using a iterative Depth-first search (DFS), 2. iterative Breadth-first search (DFS) and 3. using a recursive function. The diffrence between DFS and BFS is that the DFS algorithm uses a stack data structure and performs two stages, first visited vertices are pushed into the stack, and second if there are no vertices then visited vertices are popped. BFS uses a queue data structure that follows the first-in-first-out principle. Whereby, level by level one vertex is visited and marked, then its adjacent nodes are visited and stored in the queue. With the recursive solution we first pass the root node and for every node encountered, we calculate it's max left and right depth and return the value plus one to represent the current node. 

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
 * @param {ListNode} root
 * @return {number}
 */
var maxDepthDFS = function (root) {
  if (!root) {
    return 0;
  }

  let stack = [root, 1];
  let total = 0;

  while (stack.length) {
    let depth = stack.pop();
    let node = stack.pop();

    if (node) {
      total = Math.max(total, depth);

      stack.push(node.left, depth + 1);
      stack.push(node.right, depth + 1);
    }
  }
  return total;
};

/**
 * BFS (Iterative)
 *
 * @param {ListNode} root
 * @return {number}
 */
var maxDepthBFS = function (root) {
  if (!root) {
    return 0;
  }

  let total = 0;
  let queue = [root, null];

  while (queue.length) {
    let node = queue.shift();

    if (node == null) total += 1;

    if (node != null) {
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    } 
    else if (queue.length > 0) queue.push(null);
  }
  return total;
};

/**
 * Recursive
 *
 * @param {ListNode} root
 * @return {number}
 */
var maxDepthRecursive = function (root) {
  if (!root) {
    return 0;
  }

  const hLeft = maxDepthRecursive(root.left);
  const hRight = maxDepthRecursive(root.right);
  const total = Math.max(hLeft, hRight) + 1;

  return total;
};
```
