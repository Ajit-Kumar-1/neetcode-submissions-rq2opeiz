class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} newInterval
     * @return {number[][]}
     */
    insert(intervals, newInterval) {
        const res = [];

        for (const interval of intervals) {
            const [start, end] = interval;
            
            if (!newInterval || end < newInterval[0]) res.push(interval);
            else if (start > newInterval[1]) {
                res.push(newInterval);
                res.push(interval);
                newInterval = null;
            } else {
                newInterval = [Math.min(start, newInterval[0]), Math.max(end, newInterval[1])];
            }
        }

        if (newInterval) res.push(newInterval);
        return res;
    }
}
