class Solution {
    /**
     * @param {number[][]} times
     * @param {number} n
     * @param {number} k
     * @return {number}
     */
    networkDelayTime(times, n, k) {
        // const m = {};
        // times.forEach(([u, v, t]) => {
        //     if (!m[u]) m[u] = [];
        //     m[u].push([v, t]);
        // })
        
        // const totals = Array(n).fill(Infinity);

        // const dfs = (node, total = 0) => {
        //     if (total > totals[node - 1]) return;
        //     totals[node - 1] = total;
        //     m[node]?.forEach(([next, time]) => dfs(next, total + time));
        // }

        // dfs(k);

        // const max = Math.max(...totals);
        // return max === Infinity ? -1 : max;

        const adj = {};
        for (const [u, v, w] of times) {
            if (!adj[u]) adj[u] = [];
            adj[u].push([v, w]);
        }

        const dist = Array(n + 1).fill(Infinity);
        const dfs = (node, time) => {
            if (time >= dist[node]) return;
            dist[node] = time;
            if (!adj[node]) return;
            for (const [nei, w] of adj[node]) {
                dfs(nei, time + w);
            }
        };

        dfs(k, 0);
        const res = Math.max(...dist.slice(1));
        return res === Infinity ? -1 : res;
    }
}
