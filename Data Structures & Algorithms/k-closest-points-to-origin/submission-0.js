class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        const dist = (point) => Math.sqrt(Math.pow(point[0], 2) + Math.pow(point[1], 2));
        return points.sort((a, b) => dist(a) - dist(b)).slice(0, k);
    }
}
