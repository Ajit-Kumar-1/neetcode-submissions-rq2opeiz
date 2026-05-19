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
        let res = [];
        if (!root) return res;

        const q = [root];

        while (q.length) {
            let level = [];

            for (let i = q.length; i > 0; i--) {
                let node = q.pop();
                if (node !== null) {
                    level.unshift(node.val);
                    q.unshift(node.right);
                    q.unshift(node.left);
                }
            }

            if (level.length) res.push(level);
        }

        return res;
    }
}
