import { TreeNode } from "../226-Invert-Binary-Tree/solution";

/**
 * BFS (Iterative)
 * Time O(root * subRoot) | Space O(n)
 * https://leetcode.com/problems/subtree-of-another-tree/
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
function isSameTreeBFS(
  root: TreeNode | null,
  subRoot: TreeNode | null
): boolean {
  if (!subRoot) return false;

  const q = [root];

  while (q.length) {
    const rootNode = q.shift();

    if (!rootNode) continue;
    if (areEqual(rootNode, subRoot)) return true;
    q.push(rootNode.left, rootNode.right);
  }

  return false;
}

const areEqual = (tree: TreeNode | null, subTree: TreeNode | null) => {
  const q = [tree, subTree];
  while (q.length) {
    const treeNode = q.shift();
    const subTreeNode = q.shift();
    if (!treeNode && !subTreeNode) continue;
    if (!treeNode || !subTreeNode || treeNode.val !== subTreeNode.val)
      return false;
    q.push(treeNode.left, subTreeNode.left);
    q.push(treeNode.right, subTreeNode.right);
  }
  return true;
};
