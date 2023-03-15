## 226. Invert Binary Tree

Given the `root` of a binary tree, invert the tree, and return its root.

##### Example 1:

> **Input:** root = [4,2,7,1,3,6,9] > **Output:** [4,7,2,9,6,3,1]

##### Example 2:

> **Input:** root = [2,1,3] > **Output:** [2,3,1]

##### Example 3:

> **Input:** root = []
> **Output:** []

###### Contraints:

- The number of nodes in the tree is in the range `[0, 100]`.
- `-100 <= Node.val <= 100`

## Solution

As you an see below I have three solutions to this problem, 1. using a iterative Depth-first search (DFS), 2. iterative Breadth-first search (DFS) and 3. using a recursive function. The diffrence between DFS and BFS is that the DFS algorithm uses a stack data structure and performs two stages, first visited vertices are pushed into the stack, and second if there are no vertices then visited vertices are popped. BFS uses a queue data structure that follows the first-in-first-out principle. Whereby, level by level one vertex is visited and marked, then its adjacent nodes are visited and stored in the queue. With the recursive solution we first pass the root node and for every node encountered, swap its left and right child before recursively inverting its left and right subtree. 

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
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var invertTreeDFS = function (root) {
  if (!root) return root;

  const stack = [root];

  while (stack.length) {
    const n = stack.pop();
    if (n !== null) {
      const oldLeft = n.left;
      n.left = n.right;
      n.right = oldLeft;
      stack.push(n.left, n.right);
    }
  }

  return root;
};

/**
 * BFS (Iterative)
 *
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var invertTreeBFS = function (root) {
  if (!root) return root;

  const queue = [root];

  while (queue.length) {
    const n = queue.shift();
    if (n !== null) {
      const oldLeft = n.left;
      n.left = n.right;
      n.right = oldLeft;
      queue.push(n.left, n.right);
    }
  }

  return root;
};

/**
 * Recursive
 *
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var invertTreeRecursive = function (root) {
  if (!root) {
    return root;
  }

  const oldLeft = root.left;
  root.left = root.right;
  root.right = oldLeft;

  invertTreeRecursive(root.left);
  invertTreeRecursive(root.right);

  return root;
};
```
