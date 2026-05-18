/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */
class Solution {
    /**
     * @param {ListNode} head
     * @param {number} left
     * @param {number} right
     * @return {ListNode}
     */
    reverseBetween(head, left, right) {
        if (left === right) return head;

        const stack = [], pre = [];
        let cur = head;

        for (let i = 0; i < left - 1; i++) {
            pre.push(cur.val);
            cur = cur.next;
        }

        for (let i = 0; i <= right - left; i++) {
            stack.push(cur.val);
            cur = cur.next;
        }

        let res = new ListNode(stack.shift())
        res.next = cur;
        while (stack.length) {
            const temp = res;
            res = new ListNode(stack.shift());
            res.next = temp;
        }
        while (pre.length) {
            const temp = res;
            res = new ListNode(pre.pop());
            res.next = temp;
        }

        return res;
    }
}
