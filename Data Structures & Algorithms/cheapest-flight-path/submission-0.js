class Solution {
    /**
     * @param {number} n
     * @param {number[][]} flights
     * @param {number} src
     * @param {number} dst
     * @param {number} k
     * @return {number}
     */
    findCheapestPrice(n, flights, src, dst, k) {
        const adj = {};
        for (const [source, dest, price] of flights) {
            if (!adj[source]) adj[source] = [];
            adj[source].push([dest, price]);
        }

        let cost = Infinity;
        const dfs = (port, total = 0, stops = 0) => {
            if (port === dst) cost = Math.min(cost, total);
            if (!adj[port] || total > cost || stops > k) return;
            for (const [next, price] of adj[port]) {
                dfs(next, total + price, stops + 1);
            }
        }

        dfs(src);

        return cost === Infinity ? -1 : cost;
    }
}
