class Solution {
    /**
     * @param {number[][]} times
     * @param {number} n
     * @param {number} k
     * @return {number}
     */
    networkDelayTime(times, n, k) {
        const adj = {};
        for (const [u, v, t] of times) {
            if (!adj[u]) adj[u] = [];
            adj[u].push([v, t]);
        }

        const totals = Array(n).fill(Infinity);

        const dfs = (node, total) => {
            if (total >= totals[node - 1]) return;
            totals[node - 1] = total;
            if (!adj[node]) return;
            for (const [next, time] of adj[node]) {
                dfs(next, total + time);
            }
        }

        dfs(k, 0);

        const max = Math.max(...totals);
        return max === Infinity ? -1 : max;
    }
}
