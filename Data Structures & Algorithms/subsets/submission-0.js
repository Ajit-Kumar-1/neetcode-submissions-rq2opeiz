class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        const output = [[]];
        nums.forEach((num) => {
            const newItems = [];
            output.forEach((sub) => {
                newItems.push([...sub, num]);
            });
            output.push(...newItems);
        });
        return output;
    }

}
