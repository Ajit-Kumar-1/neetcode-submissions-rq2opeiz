class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let res = false;
        let rowIndex = null;
        let i = 0;
        while (!res && rowIndex === null && i < matrix.length) {
            if (target === matrix[i][matrix[i].length - 1]) res = true;
            else if (target < matrix[i][matrix[i].length - 1]) rowIndex = i;
            i++;
        }
        if (res) return true;
        if (rowIndex === null) return false;
        i = 0;
        while (!res && i < matrix[rowIndex].length - 1) {
            if (target === matrix[rowIndex][i]) res = true;
            i++;
        }
        return res;
    }
}
