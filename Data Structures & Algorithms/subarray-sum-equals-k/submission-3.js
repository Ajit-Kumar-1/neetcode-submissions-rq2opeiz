class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        let res = 0;
        let total = 0;
        for (const n of nums) {
            total += n;
        }
        for (let l = -1; l < nums.length - 1; l++) {
            if (l >= 0) total -= nums[l];
            let sum = total;
            for (let r = nums.length; r > l + 1; r--) {
                if (r < nums.length) sum -= nums[r];
                if (sum === k) {
                    console.log(l, r)
                    res++;
                }
            }
        }
        return res;
    }
}
