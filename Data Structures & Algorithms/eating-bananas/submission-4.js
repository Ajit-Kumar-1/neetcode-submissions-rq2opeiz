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
            let k = Math.floor((l + r) / 2);
            const time = piles.reduce((total, curr) => total + Math.ceil(curr / k), 0);
            if (time <= h) {
                res = Math.min(res, k);
                r = k - 1;
            } else l = k + 1;
        }
        
        return res;
    }
}
