class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits) {
        if (digits.length === 0) return [];

        let res = [''];

        const chars = {
            '2': ['a', 'b', 'c'],
            '3': ['d', 'e', 'f'],
            '4': ['g', 'h', 'i'],
            '5': ['j', 'k', 'l'],
            '6': ['m', 'n', 'o'],
            '7': ['p', 'q', 'r', 's'],
            '8': ['t', 'u', 'v'],
            '9': ['w', 'x', 'y', 'z']
        }

        for (let i = 0; i < digits.length; i++) {
            const newRes = [];
            res.forEach((str) => {
                chars[digits[i]].forEach((char) => {
                    newRes.push(str + char);
                });
            });
            res = newRes;
        }

        return res;
    }
}
