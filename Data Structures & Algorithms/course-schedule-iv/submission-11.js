class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @param {number[][]} queries
     * @return {boolean[]}
     */
    checkIfPrerequisite(numCourses, prerequisites, queries) {
        const res = [];
        const adj = Array.from({ length: numCourses }, () => []);
        const pre = Array.from({ length: numCourses }, () => Array.from({ length: numCourses }, () => -1))

        for (const [u, v] of prerequisites) {
            adj[v].push(u);
        }

        const dfs = (u, v) => {
            if (pre[u][v] !== -1) return pre[u][v] === 1;
            if (adj[v].includes(u)) {
                pre[u][v] = 1;
                return true;
            }
            for (const nv of adj[v]) {
                if (dfs(u, nv)) {
                    pre[u][nv] = 1;
                    return true;
                }
            }
            pre[u][v] = 0;
            return false;
        }

        for (const [u, v] of queries) {
            res.push(dfs(u, v))
        }

        return res;
    }
}
