class Solution {
    /**
     * @param {number[]} weights
     * @param {number} days
     * @return {number}
     */
    shipWithinDays(weights, days) {
        let l = 0;
        let r = 0;

        for (const w of weights) {
            l = Math.max(l, w);
            r += w;
        }

        let res = r;

        const canShip = (size) => {
            let ships = 1, curr = size;

            for (const w of weights) {
                if (curr - w < 0) {
                    ships++;
                    if (ships > days) return false;
                    curr = size;
                }
                curr -= w;
            }

            return true;
        };

        while (l <= r) {
            const mid = Math.floor((l + r) / 2);
            if (canShip(mid)) {
                res = mid;
                r = mid - 1;
            } else l = mid + 1;
        }

        return res;
    }
}
