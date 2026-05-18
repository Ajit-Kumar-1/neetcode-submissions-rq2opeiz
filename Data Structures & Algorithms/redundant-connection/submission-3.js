class Solution {
    /**
     * @param {number[][]} edges
     * @return {number[]}
     */
    findRedundantConnection(edges) {
        const m = {};
        for (const [u, v] of edges) {
            if (!m[u]) m[u] = [];
            m[u].push(v);
            if (!m[v]) m[v] = [];
            m[v].push(u);
        }

        let c = {};
        let cycle = false;

        (function dfs(u = 1, prev = -1, path = []) {
            let i = 0;
            while (!cycle && i < path.length) {
                if (path[i] === u) {
                    cycle = true;
                    for (let j = i; j < path.length; j++) {
                        for (let k = j + 1; k < path.length; k++) {
                            if (!c[path[j]]) c[path[j]] = {};
                            c[path[j]][path[k]] = true;
                            if (!c[path[k]]) c[path[k]] = {};
                            c[path[k]][path[j]] = true;
                        }
                    }
                } else i++;
            }
            if (cycle) return;
            path.push(u);
            for (const newU of (m[u] ?? [])) {
                if (newU !== prev) dfs(newU, u, path);
            }
            path.pop();
        })();
        console.log(c)
        for (let i = edges.length - 1; i >= 0; i--) {
            const [u, v] = edges[i];
            if (c[u]?.[v]) return [u, v]
        }
    }
}
