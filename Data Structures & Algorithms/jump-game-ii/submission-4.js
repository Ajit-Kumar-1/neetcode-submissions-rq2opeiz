class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    jump(nums) {
        let res = 0, start = 0, r = 0;
        while (r < nums.length - 1) {
            let max = 0;
            for (let i = start; i <= r; i++) max = Math.max(max, i + nums[i]);
            start = r + 1;
            r = max;
            res++;
        }

        return res;
    }
}
