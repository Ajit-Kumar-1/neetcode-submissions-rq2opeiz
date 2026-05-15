class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    checkValidString(s) {
        let min = 0, max = 0;

        for (let i = 0; i < s.length; i++) {
            const c = s[i];
            if (c === '(') {
                min++;
                max++;
            }
            else if (c === ')') {
                min--;
                max--;
            }
            else if (c === '*') {
                min--;
                max++;
            }

            if (max < 0) return false;
            if (min < 0) min = 0;
        }

        return min === 0;
    }
}
