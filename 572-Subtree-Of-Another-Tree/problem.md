## 572. Subtree of Another Tree

Given the roots of two binary trees `root` and sub`Root`, return `true` if there is a subtree of `root` with the same structure and node values of `subRoot` and `false` otherwise.

A subtree of a binary tree is a tree that consists of a node in tree and all of this node's descendants. The tree tree could also be considered as a subtree of itself.

##### Example 1:

> **Input:** root = [3,4,5,1,2], subRoot = [4,1,2] **Output:** true

##### Example 2:

> **Input:** root = [3,4,5,1,2,null,null,null,null,0], subRoot = [4,1,2] > **Output:** false

###### Contraints:

- The number of nodes in the `root` tree is in the range `[1, 2000]`.
- The number of nodes in the `subRoot` tree is in the range `[1, 1000]`.
- `-104 <= root.val <= 104`
- `104 <= subRoot.val <= 104`

## Solution

Firstly, we initialize a queue data structure with the root inside. We then create a while loop which will run until the `queue` is empty. Inside the loop we shift the first value in the `queue`, if this value is `null` we break the current loop and continue with the next iteration. We then pass the `rootNode` and `subRoot` to a helper function called `areEqual`, which places both the `rootNode` and `subRoot` into a queue and checks each node and it's left and right values for a subtree. If this function returns `true` then we know that the `subRoot` is a sub tree of `root` and we can return `true`. Otherwise, we push the `rootNode` left and right nodes into the `queue`. If no matches are found for a subtree in the `root` we return `false`.

##### Complexity

- Time O(root * subRoot)
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
 * BFS (Iterative)
 *
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function (root, subRoot) {
  const queue = [root];

  while (queue.length) {
    const rootNode = queue.shift();

    if (!rootNode) continue;
    if (areEqual(rootNode, subRoot)) return true;
    queue.push(rootNode.left, rootNode.right);
  }

  return false;
};

var areEqual = (tree: TreeNode | null, subTree: TreeNode | null) => {
  const queue = [tree, subTree];
  while (queue.length) {
    const treeNode = queue.shift();
    const subTreeNode = queue.shift();
    if (!treeNode && !subTreeNode) continue;
    if (!treeNode || !subTreeNode || treeNode.val !== subTreeNode.val)
      return false;
    queue.push(treeNode.left, subTreeNode.left);
    queue.push(treeNode.right, subTreeNode.right);
  }
  return true;
};
```
