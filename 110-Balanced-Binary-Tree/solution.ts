import { TreeNode } from "../226-Invert-Binary-Tree/solution";

/**
 * DFS (Recursive)
 * Time O(n) | Space O(h)
 * https://leetcode.com/problems/diameter-of-binary-tree/description
 * @param {TreeNode} root
 * @return {boolean}
 */
function isBalanced(root: TreeNode | null): boolean {
  if (!root) return true;

  let balanced = true;

  function dfs(node: TreeNode | null): number {
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
}