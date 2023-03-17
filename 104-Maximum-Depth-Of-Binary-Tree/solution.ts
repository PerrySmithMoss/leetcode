import { TreeNode } from "../226-Invert-Binary-Tree/solution";

/**
 * DFS (Iterative)
 * Time O(n) | Space O(n)
 * https://leetcode.com/problems/maximum-depth-of-binary-tree/
 * @param {TreeNode} root
 * @return {number}
 */
function maxDepthDFS(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }

  let stack = [root, 1];
  let total = 0;

  while (stack.length) {
    let depth = stack.pop();
    let node = stack.pop();

    if (node && typeof node !== "number") {
      total = Math.max(total, depth as number);

      stack.push(node.left as TreeNode || null, (depth as number) + 1);
      stack.push(node.right as TreeNode || null, (depth as number) + 1);
    }
  }
  return total;
}

/**
 * BFS (Iterative)
 * Time O(n) | Space O(n)
 * https://leetcode.com/problems/maximum-depth-of-binary-tree/
 * @param {TreeNode} root
 * @return {number}
 */
function maxDepthBFS(root: TreeNode | null): number {
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
}

/**
 * Recursive
 * Time O(n) | Space O(n)
 * https://leetcode.com/problems/maximum-depth-of-binary-tree/
 * @param {TreeNode} root
 * @return {number}
 */
function maxDepthRecursive(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }

  let hLeft = maxDepthRecursive(root.left);
  let hRight = maxDepthRecursive(root.right);
  let total = Math.max(hLeft, hRight) + 1;

  return total;
}
