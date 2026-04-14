class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    findTargetSumWays(nums, target) {
        let res = 0;

        (function dfs(i = 0, sum = 0, vals = []){
            if (i === nums.length) {
                if (sum === target) res++;
                return;
            }
            const num = nums[i];
            dfs(i + 1, sum - num, [...vals, -num]);
            dfs(i + 1, sum + num, [...vals, num]);
        })();

        return res;
    }
}
