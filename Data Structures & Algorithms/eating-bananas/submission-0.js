class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let l = 1;
        let r = Math.max(...piles);
        let res = r;

        while (l <= r) {
            let k = Math.floor(0.5 * (l + r));

            let time = 0;
            for (const p of piles) {
                time += Math.ceil(p / k);
            }
            if (time <= h) {
                res = k;
                r = k - 1;
            } else l = k + 1;
        }

        return res;
    }
}
