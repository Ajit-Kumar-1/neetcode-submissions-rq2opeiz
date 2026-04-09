class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        let found = false;
        const sorted1 = s1.split('').sort().join('');
        let i = 0;
        while (!found && i < s2.length - s1.length + 1) {
            const sub = s2.substring(i, i + s1.length).split('').sort().join('');
            if (sorted1 === sub) found = true;
            i++;
        }
        return found;
    }
}
