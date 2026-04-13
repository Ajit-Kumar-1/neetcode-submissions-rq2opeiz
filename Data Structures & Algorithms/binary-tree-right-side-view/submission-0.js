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
     * @return {number[]}
     */
    rightSideView(root) {
        let res = [];
        (function dfs(n = root, level = 0) {
            if (!n) return;
            if (!res[level]) res[level] = [];
            res[level].push(n.val)
            dfs(n.left, level + 1);
            dfs(n.right, level + 1);
        })();
        return res.map((level) => level[level.length - 1]);
    }
}
