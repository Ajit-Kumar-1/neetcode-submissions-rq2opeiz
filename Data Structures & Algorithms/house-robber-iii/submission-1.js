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
    rob(root) {
        return Math.max(...(function dfs(n = root) {
            if (!n) return [0, 0];           
            
            const left = dfs(n.left);
            const right = dfs(n.right);

            const skip = n.val + left[1] + right[1];
            const without = Math.max(...left) + Math.max(...right);

            return [skip, without];
        })());
    }
}
