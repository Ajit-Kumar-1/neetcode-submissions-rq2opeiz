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
     * @return {number[][]}
     */
    levelOrder(root) {
        const out = [];
        (function dfs(n = root, l = 0) {
            if (Number.isFinite(n?.val)) {
                if (out.length < l + 1) out.push([]);
                out[l].push(n.val);
                if (n?.left) dfs(n.left, l + 1);
                if (n?.right) dfs(n.right, l + 1);
            }
        })();
        return out;
    }
}
