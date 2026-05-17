/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    /**
     * @param {TreeNode} root
     * @param {number} val
     * @return {TreeNode}
     */
    insertIntoBST(root, val) {
        if (!root?.val) return new TreeNode(val);
        (function dfs(n = root) {
            if (val < n.val) {
                if (!n.left) {
                    n.left = new TreeNode(val);
                } else dfs(n.left);
            } else if (val > n.val) {
                if (!n.right) {
                    n.right = new TreeNode(val);
                } else dfs(n.right);
            }
        })();
        return root;
    }
}
