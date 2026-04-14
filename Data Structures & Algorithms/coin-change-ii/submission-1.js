class Solution {
    /**
     * @param {number} amount
     * @param {number[]} coins
     * @return {number}
     */
    change(amount, coins) {
        let dp = new Array(amount + 1).fill(0);
        dp[0] = 1;
        for (let coin of coins) {
            for (let a = 1; a <= amount; a++) {
                dp[a] += coin <= a ? dp[a - coin] : 0; 
            }
        }
        return dp[amount];
    }
}
