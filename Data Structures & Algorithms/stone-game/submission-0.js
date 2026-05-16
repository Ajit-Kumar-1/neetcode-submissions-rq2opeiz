class Solution {
    /**
     * @param {number[]} piles
     * @return {boolean}
     */
    stoneGame(piles) {
        let count = 0, a = 0, b = 0;
        while (piles.length) {
            let pile = 0;
            if (piles[0] < piles[piles.length - 1]) pile = piles.pop();
            else pile = piles.shift();
            if (count % 2 === 0) a += pile;
            else b += pile;
        }
        return a > b;
    }
}
