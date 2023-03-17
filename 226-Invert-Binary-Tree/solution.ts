// Definition for a binary tree node.
export class TreeNode {
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
 * Time O(n) | Space O(n)
 * https://leetcode.com/problems/invert-binary-tree/
 * @param {TreeNode} root
 * @return {TreeNode | null}
 */
function invertTreeDFS(root: TreeNode | null): TreeNode | null {
  const stack = [root];

  while (stack.length) {
    const n = stack.pop();
    if (n) {
      const oldLeft = n.left;
      n.left = n.right;
      n.right = oldLeft;
      stack.push(n.left, n.right);
    }
  }

  return root;
}

/**
 * BFS (Iterative)
 * Time O(n) | Space O(n)
 * https://leetcode.com/problems/invert-binary-tree/
 * @param {TreeNode} root
 * @return {TreeNode | null}
 */
function invertTreeBFS(root: TreeNode | null): TreeNode | null {
  const queue = [root];

  while (queue.length) {
    const n = queue.shift();
    if (n) {
      const oldLeft = n.left;
      n.left = n.right;
      n.right = oldLeft;
      queue.push(n.left, n.right);
    }
  }

  return root;
}

/**
 * Recursive
 * Time O(n) | Space O(h)
 * https://leetcode.com/problems/invert-binary-tree/
 * @param {TreeNode} root
 * @return {TreeNode | null}
 */
function invertTreeRecursive(root: TreeNode | null): TreeNode | null {
  if (!root) {
    return root;
  }

  const oldLeft = root.left;
  root.left = root.right;
  root.right = oldLeft;

  invertTreeRecursive(root.left);
  invertTreeRecursive(root.right);

  return root;
}
