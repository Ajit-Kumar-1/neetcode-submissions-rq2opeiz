class Solution {
    /**
     * @param {number[]} matchsticks
     * @return {boolean}
     */
    makesquare(matchsticks) {
        const total = matchsticks.reduce((a, b) => a + b, 0)

        if (total % 4 !== 0) return false;

        const target = total / 4;
        const sides = Array(4).fill(0);
        matchsticks.sort((a, b) => b - a);

        return (function dfs(index = 0) {
            if (index === matchsticks.length) return true;

            for (let i = 0; i < 4; i++) {
                const stick = matchsticks[index];
                if (sides[i] + stick <= target) {
                    sides[i] += stick;
                    if (dfs(index + 1)) return true;
                    sides[i] -= stick;
                }
                if (sides[i] === 0) break;
            }

            return false;
        })();
    }
}
