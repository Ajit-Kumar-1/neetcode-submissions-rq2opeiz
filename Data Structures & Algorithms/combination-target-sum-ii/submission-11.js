class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        const output = [];
        candidates.sort((a, b) => a - b);

        function dfs(index, total, path) {
            if (total === target) {
                output.push([...path]);
                return;
            }

            for (let i = index; i < candidates.length; i++) {
                if (i > index && candidates[i] === candidates[i - 1]) continue;
                if (total + candidates[i] > target) break;

                path.push(candidates[i]);
                dfs(i + 1, total + candidates[i], path);
                path.pop();
            }
        }

        dfs(0, 0, []);
        
        return output;
    }
}
