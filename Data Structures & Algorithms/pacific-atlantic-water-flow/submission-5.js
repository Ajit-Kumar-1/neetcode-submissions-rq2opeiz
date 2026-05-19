class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
        const ROWS = heights.length, COLS = heights[0].length;
        const pacific = Array.from({ length: ROWS }, () => Array(COLS).fill(false));
        const atlantic = Array.from({ length: ROWS }, () => Array(COLS).fill(false));
        const directions = [[-1, 0], [1, 0], [0, 1], [0, -1]];

        const dfs = (r, c, ocean) => {
            ocean[r][c] = true;
            const h = heights[r][c];
            for (const [dr, dc] of directions) {
                const [nr, nc] = [r + dr, c + dc];
                if (nr >= 0 && nc >= 0 && nr < ROWS && nc < COLS && !ocean[nr][nc] && heights[nr][nc] >= h) {
                    dfs(nr, nc, ocean);
                }
            }
        };

        for (let r = 0; r < ROWS; r++) {
            dfs(r, 0, pacific);
            dfs(r, COLS - 1, atlantic);
        }
        for (let c = 0; c < COLS; c++) {
            dfs(0, c, pacific);
            dfs(ROWS - 1, c, atlantic);
        }

        const res = [];

        for (let i = 0; i < heights.length; i++) {
            for (let j = 0; j < heights[0].length; j++) {
                if (pacific[i][j] && atlantic[i][j]) {
                    res.push([i, j]);
                }
            }
        }

        return res;
    }
}
