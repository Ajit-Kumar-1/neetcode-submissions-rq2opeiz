class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target, nums) {
        let res = Infinity;
        for (let i = 0; i < nums.length; i++) {
            let met = false;
            let j = i;
            let count = 0;
            let total = 0;
            while (!met && j < nums.length) {
                total += nums[j];
                count++;
                if (total >= target) {
                    met = true;
                    res = Math.min(res, count);
                }
                j++;
            }
        }

        return res === Infinity ? 0 : res;
    }
}
