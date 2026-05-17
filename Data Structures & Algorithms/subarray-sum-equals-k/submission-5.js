class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        let res = 0, sum = 0;
        const m = {};
        m[0] = 1;

        for (const n of nums) {
            sum += n;
            res += m[sum - k] || 0;
            m[sum] = (m[sum] || 0) + 1;
        }
        
        return res;
    }
}
