class Solution {
    /**
     * @param {string} s
     * @param {string[]} dictionary
     * @return {number}
     */
    minExtraChar(s, dictionary) {
        const dp = new Array(s.length + 1).fill(-1);
        dp[s.length] = 0;

        return (function dfs (i = 0) {
            if (dp[i] !== -1) return dp[i];
            
            let res = 1 + dfs(i + 1);

            for (let j = i + 1; j <= s.length; j++) {
                if (dictionary.includes(s.slice(i, j))) {
                    res = Math.min(res, dfs(j));
                }
            }

            dp[i] = res;
            return res;
        })();
    }
}
