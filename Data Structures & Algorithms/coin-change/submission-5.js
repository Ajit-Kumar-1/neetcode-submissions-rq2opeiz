class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {
        if (amount === 0) return 0;
        coins.sort((a, b) => a - b);

        let res = Infinity;

        function dfs (index = coins.length - 1, count = 0, total = 0) {
            const coin = coins[index];
            if (total === amount) res = Math.min(count, res);
            if (total > amount || count > res || index < 0) return;
            for (let i = 0; i <= Math.floor((amount - total) / coin); i++) {
                dfs(index - 1, count + i, total + coin * i);
            }
        }

        dfs();

        return res === Infinity ? - 1 : res;
    }
}
