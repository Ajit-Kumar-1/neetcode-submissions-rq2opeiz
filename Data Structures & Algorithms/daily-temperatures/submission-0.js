class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const res = new Array(temperatures.length).fill(0);
        let stack = [];
        for (let i = 0; i < temperatures.length; i++) {
            const temp = temperatures[i];

            while (stack.length > 0 && temp > stack[stack.length - 1][0]) {
                const stackIndex = stack.pop()[1];
                res[stackIndex] = i - stackIndex;
                console.log(res)
            }
            stack.push([temp, i]);
        }
        return res;
    }
}
