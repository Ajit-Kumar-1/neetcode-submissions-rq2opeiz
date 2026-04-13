class Solution {
    /**
     * @param {number[]} gas
     * @param {number[]} cost
     * @return {number}
     */
    canCompleteCircuit(gas, cost) {
        let res = -1;

        function travel(start, tank, current = start){
            tank = tank + gas[current] - cost[current];
            if (tank < 0) return;
            let next = current + 1 < gas.length ? current + 1 : 0;
            if (next === start) res = start;
            else travel(start, tank, next);
        }

        gas.forEach((g, i) => travel(i, 0))

        return res;
    }
}
