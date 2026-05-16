class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums) {
        const m = {};
        let res = [];
        for (const n of nums) {
            m[n] = (m[n] ?? 0) + 1;
            if (m[n] > nums.length / 3) {
                res.push(n);
                m[n] = -nums.length;
            }
        }
        return res;
    }
}
