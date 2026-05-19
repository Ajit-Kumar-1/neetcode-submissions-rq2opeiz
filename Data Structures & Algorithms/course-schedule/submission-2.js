class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        const preMap = {};
        for (let i = 0; i < numCourses; i++) preMap[i] = [];
        for (const [course, pre] of prerequisites) preMap[course].push(pre);

        const visited = {};

        const dfs = (i) => {
            if (visited[i]) return false;
            visited[i] = true;
            for (const newI of preMap[i]) {
                if (!dfs(newI)) return false;
            }
            visited[i] = false;
            preMap[i] = [];
            return true;
        }
        

        for (let c = 0; c < numCourses; c++) {
            if (!dfs(c)) return false;
        }

        return true;
    }
}
