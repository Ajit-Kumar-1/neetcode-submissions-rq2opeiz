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
                vals.push(vals.pop() - o1);
            }
            else if (t === '/') {
                const o1 = vals.pop();
                vals.push(Math.trunc(vals.pop() / o1));
            }
            else vals.push(parseInt(t));
        });
        return vals.pop();
    }
}
