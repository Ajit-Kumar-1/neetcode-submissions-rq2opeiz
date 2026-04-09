class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let valid = true;
        const segments = [[[], [], []], [[], [], []], [[], [], []]];
        const cols = [[], [], [], [], [], [], [], [], []];

        function check(elements) {
            if (!valid) return;
            const record = {};
            elements.forEach((num) => {
                if (!valid || num === '.') return;
                if (record[num]) valid = false;
                else record[num] = 1;
            });
        }
        let i = 0;
        let j = 0;
        while (valid && i < 9) {
            check(board[i]);
            for (let j = 0; valid && j < 9; j++) {
                segments[Math.floor(i / 3)][Math.floor(j / 3)].push(board[i][j]);
                cols[j].push(board[i][j]);
            }
            i++;
        }
        cols.forEach((col) => check(col));
        segments.forEach((row) => row.forEach((segment) => check(segment)));

        return valid;
    }
}
