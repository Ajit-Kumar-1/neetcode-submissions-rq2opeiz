class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[][]}
     */
    fourSum(nums, target) {
        nums.sort((a, b) => a - b);
        const res = [], item = [];

        (function kSum(k = 4, start = 0, t = target) {
            if (k === 2) {
                let l = start, r = nums.length - 1;
                while (l < r) {
                    const sum = nums[l] + nums[r];
                    if (sum < t) l++
                    else if (sum > t) r--;
                    else {
                        res.push([...item, nums[l], nums[r]]);
                        l++;
                        r--;
                        while (l < r && nums[l] === nums[l - 1]) l++;
                        while (l < r && nums[r] === nums[r + 1]) r--; 
                    }
                }
                return;
            }

            for (let i = start; i < nums.length - k + 1; i++) {
                if (i > start && nums[i] === nums[i - 1]) continue;
                item.push(nums[i]);
                kSum(k - 1, i + 1, t - nums[i]);
                item.pop();
            }
        })();

        return res;
    }
}
