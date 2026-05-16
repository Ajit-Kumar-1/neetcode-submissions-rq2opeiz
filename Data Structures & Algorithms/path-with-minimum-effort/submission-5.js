class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    minimumEffortPath(heights) {
        const ROWS = heights.length;
        const COLS = heights[0].length;
        const directions = [[-1, 0], [0, -1], [1, 0], [0, 1]];
        const visited = heights.map((row) => row.map(() => false));

        const dfs = (r, c, limit) => {
            if (r === ROWS - 1 && c === COLS - 1) return true;
            visited[r][c] = true;
            for (const [dr, dc] of directions) {
                const newR = r + dr;
                const newC = c + dc;
                if (
                    newR >= 0
                    && newC >= 0
                    && newR <= ROWS - 1
                    && newC <= COLS - 1
                    && !visited[newR][newC]
                    && limit >= Math.abs(heights[r][c] - heights[newR][newC])
                ) {
                    if (dfs(newR, newC, limit)) return true;
                }
            }
            return false;
        }

        let l = 0, r = 1_000_000, res = r;
        while (l <= r) {
            const mid = Math.floor((l + r) / 2);
            for (const row of visited) {
                row.fill(false);
            }
            if (dfs(0, 0, mid)) {
                res = mid;
                r = mid - 1;
            } else {
                l = mid + 1;
            }
        }
        return res;
    }
}
