import { TreeNode } from "../226-Invert-Binary-Tree/solution";

/**
 * DFS (Recursive)
 * Time O(n) | Space O(h)
 * https://leetcode.com/problems/diameter-of-binary-tree/description
 * @param {TreeNode} root
 * @return {number}
 */
function diameterOfBinaryTreeRecursive(root: TreeNode | null): number {
  if (!root) return 0;

  let diameter = 0;

  function dfs(node: TreeNode | null): number {
    if (!node) return 0;

    const left = dfs(node.left);
    const right = dfs(node.right);

    diameter = Math.max(diameter, left + right);
    return Math.max(left, right) + 1;
  }

  dfs(root);
  return diameter;
}

/**
 * DFS / Hashmap (Iterative)
 * Time O(n) | Space O(n)
 * https://leetcode.com/problems/diameter-of-binary-tree/description
 * @param {TreeNode} root
 * @return {number}
 */
function diameterOfBinaryTreeIterative(root: TreeNode | null): number {
  if (!root) return 0;

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
}
