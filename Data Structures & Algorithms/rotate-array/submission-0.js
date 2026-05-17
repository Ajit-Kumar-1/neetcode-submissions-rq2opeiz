class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    rotate(nums, k) {
        for (let ki = 0; ki < k; ki++) {
            nums.push(0);
            for (let i = nums.length - 2; i >= 0; i--) {
                nums[i + 1] = nums[i];
            }
            nums[0] = nums[nums.length - 1];
            nums.pop();
        }
    }
}
