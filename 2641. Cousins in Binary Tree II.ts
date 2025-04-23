/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function replaceValueInTree(root: TreeNode | null): TreeNode | null {
  if (!root) return null;

  const q = [root];
  root.val = 0;

  while (q.length > 0) {
    let sum = 0;
    let size = q.length;
    for (const node of q) {
      if (node.left) {
        sum += node.left.val;
      }
      if (node.right) {
        sum += node.right.val;
      }
    }

    for (let i = 0; i < size; i++) {
      const node = q.shift()!;
      const child_sum = (node.left ? node.left.val : 0) + (node.right ? node.right.val : 0);

      if (node.left) {
        node.left.val = sum - child_sum;
        q.push(node.left);
      }
      if (node.right) {
        node.right.val = sum - child_sum;
        q.push(node.right);
      }
    }
  }

  return root;
}
