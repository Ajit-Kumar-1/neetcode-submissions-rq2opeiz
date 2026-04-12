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
     * @return {number}
     */
    goodNodes(root) {
        return (function dfs(n = root, max = root.val) {
            if (!n) return 0;
            let res = n.val >= max ? 1 : 0;
            max = Math.max(max, n.val)
            res += dfs(n.left, max) + dfs(n.right, max);
            return res;
        })();
    }
}
