class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums) {
        const dp = new Array(nums.length).fill(-1);

        function dfs (i) {
            if (dp[i] !== -1) return dp[i];

            let LIS = 1;

            for (let j = i + 1; j < nums.length; j++) {
                if (nums[j] > nums[i]) {
                    LIS = Math.max(LIS, 1 + dfs(j));
                }
            }

            dp[i] = LIS;
            return LIS;
        }

        return Math.max(...nums.map((_, i) => dfs(i)));
    }
}
