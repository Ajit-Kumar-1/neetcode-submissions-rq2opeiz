class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) {
        const m = {};

        for (let i = 0; i < numCourses; i++) {
            m[i] = [];
        }

        for (const [course, req] of prerequisites) {
            m[course].push(req);
        }

        const cycle = {}, visited = {};
        const output = [];

        const dfs = (i) => {
            if (visited[i]) return true;
            if (cycle[i]) return false;
            cycle[i] = true;

            for (const pre of m[i]) {
                if (!dfs(pre)) return false;
            }
            visited[i] = true;
            output.push(i);
            return true;
        };

        for (let i = 0; i < numCourses; i++) {
            if (!dfs(i)) return [];
        }
        
        return output;
    }
}
