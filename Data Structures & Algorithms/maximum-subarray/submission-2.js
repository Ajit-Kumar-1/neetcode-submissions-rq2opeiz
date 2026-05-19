class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let globMax = nums[0], curMax = 0;
        for (const num of nums) {
            if (curMax < 0) curMax = 0;
            curMax += num;
            globMax = Math.max(globMax, curMax);
        }
        return globMax;
    }
}
