## 543. Diameter of Binary Tree

Given the `root` of a binary tree, return the length of the diameter of the tree.

The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the `root`.

The length of a path between two nodes is represented by the number of edges between them.

##### Example 1:

> **Input:** root = [1,2,3,4,5] > **Output:** 3
> **Explination:** 3 is the length of the path [4,2,1,3] or [5,2,1,3].

##### Example 2:

> **Input:** root = [1,2] > **Output:** 1

###### Contraints:

- The number of nodes in the tree is in the range `[0, 104]`.
- `-100 <= Node.val <= 100`

## Solution

As you an see below I have two solutions, one being an iterative solution and the other being a recursive solution. As the recursive solution is slightly more optimal that is the one I shall be explaining below. 

At the start of the function we can safely short circuit and return `0` if the root is `null`. If there is a `root` we initialize a variable called `diameter`, this will hold the max diameter of nodes found. Next we create a helper function called `dfs` and pass the root of the binary tree as an argument. This `dfs` function does a recurive depth first search in post order on the root node. This means it will first traverse the left most subtree, then the right subtree and back to the route of the subtree, calculating the max diameter of each sub tree plus one for teh current node. We then return the `diameter`, as this will be the max diameter which was calcualted from the su

##### Complexity

- Time O(n)
- Space O(h)

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
 * DFS (Recursive)
 *
 * @param {ListNode} root
 * @return {number}
 */
var diameterOfBinaryTreeRecursive = function (root) {
  if (!root) return 0;

  let diameter = 0;

  function dfs(node: TreeNode | null): number {
    if (!node) return 0;

    const left = dfs(node.left); // B: Invokes dfs
    const right = dfs(node.right); // C: Invokes dfs

    diameter = Math.max(diameter, left + right);
    return Math.max(left, right) + 1;
  }

  dfs(root); // A: Invokes dfs
  return diameter;
};

/**
 * DFS / Hashmap (Iterative)
 *
 * @param {ListNode} root
 * @return {number}
 */
var diameterOfBinaryTreeIterative = function (root) {
  if (!root) {
    return 0;
  }

  const map = new Map();
  let stack = [root];
  let diameter = 0;

  while (stack.length) {
    const node = stack[stack.length - 1];
    if (node.left && !map.get(node.left)) {
      stack.push(node.left);
    } else if (node.right && !map.get(node.right)) {
      stack.push(node.right);
    } else {
      stack.pop();

      const leftDepth = map.get(node.left);
      if (!leftDepth) map.set(node.left, 0);

      const rightDepth = map.get(node.right);
      if (!rightDepth) map.set(node.right, 0);

      map.set(node, 1 + Math.max(leftDepth ?? 0, rightDepth ?? 0));

      diameter = Math.max(diameter, (leftDepth ?? 0) + (rightDepth ?? 0));
    }
  }
  return diameter;
};
```
