class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const vals = [];
        const ops = [];
        tokens.forEach((t) => {
            if (t === '+') {
                const o1 = vals.pop();
                const o2 = vals.pop();
                vals.push(o1 + o2);
            }
            else if (t === '*') {
                const o1 = vals.pop();
                const o2 = vals.pop();
                vals.push(o1 * o2);
            }
            else if (t === '-') {
                const o1 = vals.pop();
                const o2 = vals.pop();
                vals.push(o2 - o1);
            }
            else if (t === '/') {
                const o1 = vals.pop();
                const o2 = vals.pop();
                vals.push(Math.trunc(o2 / o1));
            }
            else vals.push(parseInt(t));
            console.log(vals)
        });
        return vals[0];
    }
}
