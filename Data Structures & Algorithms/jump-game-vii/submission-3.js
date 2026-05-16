class Solution {
    /**
     * @param {string} s
     * @param {number} minJump
     * @param {number} maxJump
     * @return {boolean}
     */
    canReach(s, minJump, maxJump) {
        const dp = new Array(s.length).fill(false);
        dp[0] = true;
        let j = 0;

        for (let i = 0; i < s.length; i++) {
            if (!dp[i]) continue;
            j = Math.max(j, i + minJump);
            while (j <= Math.min(i + maxJump, s.length - 1)) {
                if (s[j] === '0') dp[j] = true;
                j++;
            }
        }

        return dp[s.length - 1];
    }
}
