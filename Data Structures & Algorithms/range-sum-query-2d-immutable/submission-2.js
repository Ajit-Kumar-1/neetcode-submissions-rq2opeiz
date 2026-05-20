class NumMatrix {
    /**
     * @param {number[][]} matrix
     */
    constructor(matrix) {
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[i].length; j++) {
                if (j > 0) matrix[i][j] += matrix[i][j - 1];
            }
            if (i === 0) continue;
            for (let j = 0; j < matrix[i].length; j++) {
                matrix[i][j] += matrix[i - 1][j];
            }
        }
        this.matrix = matrix;
        console.log(matrix);
    }

    /**
     * @param {number} row1
     * @param {number} col1
     * @param {number} row2
     * @param {number} col2
     * @return {number}
     */
    sumRegion(row1, col1, row2, col2) {
        return this.matrix[row2][col2]
            + ((row1 > 0 && col1 > 0) ? this.matrix[row1 - 1][col1 - 1] : 0)
            - (row1 > 0 ? this.matrix[row1 - 1][col2] : 0)
            - (col1 > 0 ? this.matrix[row2][col1 - 1] : 0);
    }
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
