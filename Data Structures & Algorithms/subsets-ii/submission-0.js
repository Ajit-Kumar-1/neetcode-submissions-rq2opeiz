class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        nums.sort((a, b) => a - b);
        const res = [[]];

        let prevIndex = 0;
        let index = 0;

        nums.forEach((num, i) => {
            index = i > 0 && num === nums[i - 1] ? prevIndex : 0;
            prevIndex = res.length;

            for (let j = index; j < prevIndex; j++) {
                res.push([...res[j], num]);
            }
        })

        return res;
    }
}
