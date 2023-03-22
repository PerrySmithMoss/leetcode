import { TreeNode } from "../226-Invert-Binary-Tree/solution";

/**
 * DFS (Iterative)
 * Time O(n) | Space O(n)
 * https://leetcode.com/problems/same-tree/
 * @param {TreeNode | null} p
 * @param {TreeNode | null} q
 * @return {boolean}
 */
function isSameTreeDFS(p: TreeNode | null, q: TreeNode | null): boolean {
  const s = [p, q];

  while (s.length) {
    const pNode = s.pop();
    const qNode = s.pop();

    if (!pNode && !qNode) return true;
    if (!pNode || !qNode) return false;
    if (pNode.val !== qNode.val) return false;

    if (pNode.left || qNode.left) s.push(pNode.left, qNode.left);
    if (pNode.right || qNode.right) s.push(pNode.right, qNode.right);
  }
  return true;
}

/**
 * BFS (Iterative)
 * Time O(n) | Space O(n)
 * https://leetcode.com/problems/same-tree/
 * @param {TreeNode | null} p
 * @param {TreeNode | null} q
 * @return {boolean}
 */
function isSameTreeBFS(p: TreeNode | null, q: TreeNode | null): boolean {
  const queue = [p, q];

  while (queue.length) {
    const nodeP = queue.shift();
    const nodeQ = queue.shift();

    if (!nodeP && !nodeQ) return true;
    if (!nodeP || !nodeQ) return false;
    if (nodeP.val !== nodeQ.val) return false;

    if (nodeP.left || nodeQ.left) queue.push(nodeP.left, nodeQ.left);
    if (nodeP.right || nodeQ.right) queue.push(nodeP.right, nodeQ.right);
  }
  return true;
}

/**
 * Recursive
 * Time O(n) | Space O(h)
 * https://leetcode.com/problems/same-tree/
 * @param {TreeNode | null} p
 * @param {TreeNode | null} q
 * @return {boolean}
 */
function isSameTreeRecursive(p: TreeNode | null, q: TreeNode | null): boolean {
  if (p === null && q === null) return true;
  if (p?.val !== q?.val) return false;

  if (!p?.left && !q?.left) return false;
  if (!p?.right && !q?.right) return false;
  return (
    isSameTreeRecursive(p!.left, q!.left) &&
    isSameTreeRecursive(p!.right, q!.right)
  );
}

/**
 * JSON.stringify hack
 * Time O(n) | Space O(1)
 * https://leetcode.com/problems/same-tree/
 * @param {TreeNode | null} p
 * @param {TreeNode | null} q
 * @return {boolean}
 */
function isSameTreeStringify(p: TreeNode | null, q: TreeNode | null): boolean {
  return JSON.stringify(p) === JSON.stringify(q);
}
