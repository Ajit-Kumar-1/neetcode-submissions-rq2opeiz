class Solution {
    /**
     * @param {number[]} gas
     * @param {number[]} cost
     * @return {number}
     */
    canCompleteCircuit(gas, cost) {
        let res = -1;

        (function travel(start = 0, tank = 0, current = start){
            tank = tank + gas[current] - cost[current];
            if (tank < 0) {
                if (start + 1 < gas.length) travel(start + 1, 0, start + 1);
                return;
            }
            let next = current + 1 < gas.length ? current + 1 : 0;
            if (next === start) res = start;
            else travel(start, tank, next);
        })();

        return res;
    }
}
