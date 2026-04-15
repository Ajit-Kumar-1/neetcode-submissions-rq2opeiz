class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        const directions = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1],
        ];
        const ROWS = grid.length,
            COLS = grid[0].length;

        const dfs = (r, c) => {
            if (r < 0 || c < 0 || r >= ROWS || c >= COLS || grid[r][c] === 0)
                return 0;

            grid[r][c] = 0;
            let res = 1;
            for (const [dr, dc] of directions) {
                res += dfs(r + dr, c + dc);
            }
            return res;
        };

        let area = 0;
        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (grid[r][c] === 1) {
                    area = Math.max(area, dfs(r, c));
                }
            }
        }

        return area;

        // let res = 0;

        // function dfs(rowIndex, colIndex, size = 0) {
        //     if (grid[rowIndex][colIndex] !== 1) return;
        //     console.log(rowIndex, colIndex)
        //     grid[rowIndex][colIndex] = 0;
        //     size++;
        //     res = Math.max(res, size);
        //     if (rowIndex > 0) dfs(rowIndex - 1, colIndex, size);
        //     if (rowIndex < grid.length - 1) dfs(rowIndex + 1, colIndex, size);
        //     if (colIndex > 0) dfs(rowIndex, colIndex - 1, size);
        //     if (colIndex < grid[rowIndex].length - 1) dfs(rowIndex, colIndex + 1, size);
        // }

        // for (let rowIndex = 0; rowIndex < grid.length; rowIndex++) {
        //     for (let colIndex = 0; colIndex < grid[rowIndex].length; colIndex++) {
        //         dfs(rowIndex, colIndex);
        //     }
        // }

        // return res;
    }
}
