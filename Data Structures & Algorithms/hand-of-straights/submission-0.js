class Solution {
    /**
     * @param {number[]} hand
     * @param {number} groupSize
     * @return {boolean}
     */
    isNStraightHand(hand, groupSize) {
        if (hand.length % groupSize !== 0) return false;

        const count = {};
        // let min = 0;

        hand.forEach((val) => {
            if (!count[val]) count[val] = 0;
            count[val] += 1;
            // min = Math.min(min, val);
        })

        for (const num of hand) {
            let start = num;
            while (count[start - 1]) start -= 1;

            while (start <= num) {
                while (count[start]) {
                    for (let i = start; i < start + groupSize; i++) {
                        if (!count[i]) return false;
                        count[i] -= 1;
                    }
                }
                start++;
            }
        }

        return true;
    }
}
