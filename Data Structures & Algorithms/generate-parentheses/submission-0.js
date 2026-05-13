class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        const res = [];

        function backtrack(open, closed, curr) {
            if (open === closed && open === n) {
                res.push(curr);
                return;
            }

            if (open < n) {
                backtrack(open + 1, closed, curr + '(');
            }

            if (closed < open) {
                backtrack(open, closed + 1, curr + ')');
            }

        }

        backtrack(0, 0, '');

        return res;
    }
}
