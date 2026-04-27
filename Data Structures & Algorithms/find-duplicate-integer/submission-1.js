class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        for (let num of nums) {
            const i = Math.abs(num) - 1;
            if (nums[i] < 0) return Math.abs(num);
            nums[i] *= -1;
        }
        return -1;
    }
}
