class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @param {string} s3
     * @return {boolean}
     */
    isInterleave(s1, s2, s3) {
        const n1 = s1.length, n2 = s2.length;
        if (n1 + n2 !== s3.length) return false;

        const dp = Array.from({ length: n1 + 1 }, () => Array(n2 + 1).fill(-1));

        const dfs = (i = 0, i1 = 0, i2 = 0) => {
            if (i === s3.length) return i1 === s1.length && i2 === s2.length;

            if (dp[i1][i2] !== -1) return dp[i1][i2];
            
            let res = false;
            if (i1 < s1.length && s1[i1] === s3[i]) {
                res = dfs(i + 1, i1 + 1, i2);
            }

            if (!res && i2 < s2.length && s2[i2] === s3[i]) {
                res = dfs(i + 1, i1, i2 + 1);
            }

            dp[i1][i2] = res;
            return res;
        };

        return dfs(0, 0, 0);
    }
}
