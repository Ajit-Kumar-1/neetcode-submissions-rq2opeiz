class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
        const insort = [];
        const m = {};
        nums.forEach((num) => {
            if (!insort.length) insort.push(num);
            else {
                let i = 0;
                let found = false;
                while (!found && i < insort.length) {
                    if(insort[i] > num) {
                        insort.splice(i, 0, num);
                        found = true;
                    } else i++;
                }
                if (!found) insort.push(num);
            };
            if (insort.length > k) insort.shift();
        });
        return insort[0];
    }
}
