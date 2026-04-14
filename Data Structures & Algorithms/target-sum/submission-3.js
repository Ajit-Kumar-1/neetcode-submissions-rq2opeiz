class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    findTargetSumWays(nums, target) {
        let dp = new Map();
        dp.set(0, 1);

        for (let num of nums) {
            let nextDp = new Map();
            for (let [total, count] of dp) {
                console.log(total, count)
                let key = total + num;
                nextDp.set(key, (nextDp.get(key) || 0) + count);
                key = total - num;
                nextDp.set(key, (nextDp.get(key) || 0) + count);
            }
            dp = nextDp;
        }

        return dp.get(target) || 0;
    }
}
