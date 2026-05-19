class Solution {
    /**
     * @param {string} text1
     * @param {string} text2
     * @return {number}
     */
    longestCommonSubsequence(text1, text2) {
        const dp = Array.from({ length: text1.length }, () => Array(text2.length).fill(-1));

        return (function dfs(i = 0, j = 0){
            if (i === text1.length || j === text2.length) return 0;
            if (dp[i][j] !== -1) return dp[i][j];
            if (text1[i] === text2[j]) dp[i][j] = 1 + dfs(i + 1, j + 1);
            else dp[i][j] = Math.max(dfs(i, j + 1), dfs(i + 1, j));
            return dp[i][j]
        })();
    }
}
