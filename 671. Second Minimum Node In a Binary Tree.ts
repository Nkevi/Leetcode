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

function findSecondMinimumValue(root: TreeNode | null): number {
    let secondMin = -1;
    let rootVal = root!.val;

    function dfs(node: TreeNode | null) {
        if (!node) return;

        if (secondMin !== -1 && node.val > secondMin) return;

        if (node.val > rootVal) {
            secondMin = node.val;
        }

        dfs(node.left);
        dfs(node.right);
    }

    dfs(root);
    return secondMin;
}
