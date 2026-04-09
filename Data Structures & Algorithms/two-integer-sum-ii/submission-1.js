class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let result = null;

        let i = numbers.length - 1;
        while (!result && i > 0) {
            let j = 1;
            while (!result && i - j >= 0) {
                if (numbers[i] + numbers[i - j] === target) {
                    result = [i - j + 1, i + 1];
                }
                j++;
            }

            i--;
        }
        return result;
    }
}
