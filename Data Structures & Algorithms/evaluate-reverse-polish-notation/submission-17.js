class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const vals = [];
        tokens.forEach((t) => {
            if (t === '+') {
                vals.push(vals.pop() + vals.pop());
            }
            else if (t === '*') {
                vals.push(vals.pop() * vals.pop());
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
        });
        return vals.pop();
    }
}
