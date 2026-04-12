class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks, n) {
        const m = {};
        for (const task of tasks) {
            m[task] = (m[task] ?? 0) + 1;
        }

        const counts = Object.values(m)
        const max = Math.max(...counts);
        const maxCount = counts.filter((val) => val === max).length;
        
        return Math.max(tasks.length, (max - 1) * (n + 1) + maxCount);
    }
}
