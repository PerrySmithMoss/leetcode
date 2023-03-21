## 110. Balanced Binary Tree

Given a binary tree, determine if it is height-balanced.

##### Example 1:

> **Input:** root = [3,9,20,null,null,15,7]
> **Output:** true

##### Example 2:

> **Input:** root = [1,2,2,3,3,null,null,4,4]
> **Output:** false

##### Example 3:

> **Input:** root = []
> **Output:** true

###### Contraints:

- The number of nodes in the tree is in the range `[0, 5000]`.
- `-104 <= Node.val <= 104`

## Solution

If the root is `null` we return `true`. Otherwise, we initialize a variable called `balanced` with value `true`. We will use this variable to hold whether the tree is balanced or not. Next, we pass the root into a function called `dps`, short for depth-first search. This function will recursively vist every sub tree and count it's left & right height. After visiting the whole subtree it will then find the absolute value of the `left` tree minus `right` tree, if that value is greater than `1` we know that it is not a balanced tree, so we re-assign `balanced` to `false`. Once the whole tree has been scanned we simply return the `balanced` variable.

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
 * @param {ListNode | null} root
 * @return {boolean}
 */
var isBalanced = function (root) {
  if (!root) return true;

  let balanced = true;

  function dfs(node: TreeNode | null): boolean {
    if (!node) return 0;

    const left = dfs(node.left);
    const right = dfs(node.right);

    if (Math.abs(left - right) > 1) {
      balanced = false;
    }

    return Math.max(left, right) + 1;
  }

  dfs(root);
  return balanced;
};
```
