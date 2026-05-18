class Solution {
    /**
     * @param {number} n
     * @param {number} k
     * @return {number[][]}
     */
    combine(n, k) {
        // const pool = Array.from({ length: n }, (_, i) => i + 1);
        const res = [];

        (function kNums (size = k, start = 0, item = []) {
            if (size === 0) {
                res.push(item);
                return;
            }
            for (let i = start; i < n; i++) {
                kNums(size - 1, i + 1, [...item, i + 1]);
            }
        })();

        return res;
    }
}
