class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {
        coins.sort((a, b) => a - b);

        let res = Infinity;

        function dfs (index = 0, count = 0, total = 0) {
            if (total === amount) res = Math.min(count, res);
            const coin = coins[index]
            for (let i = 0; i <= Math.floor((amount - total) / coin); i++) {
                dfs(index + 1, count + i, total + coin * i);
            }
        }

        dfs(0);

        return res === Infinity ? - 1 : res;
    }
}
