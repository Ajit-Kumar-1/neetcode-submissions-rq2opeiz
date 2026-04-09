class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let valid = true;
        const segments = [[[], [], []], [[], [], []], [[], [], []]];

        function check(elements) {
            if (!valid) return;
            const record = {};
            elements.forEach((num) => {
                if (!valid || num === '.') return;
                if (record[num]) valid = false;
                else record[num] = 1;
            });
        }

        for (let i = 0; i < 9; i++) {
            check(board[i]);
            check(board.map((row) => row[i]));
            for (let j = 0; j < 9; j++) {
                segments[Math.floor(i / 3)][Math.floor(j / 3)].push(board[i][j]);
            }
        }
        segments.forEach((row) => row.forEach((segment) => check(segment)));

        return valid;
    }
}
