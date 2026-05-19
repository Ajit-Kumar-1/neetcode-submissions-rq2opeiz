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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        const stack = [];
        let cur = head;
        while (cur) {
            stack.push(cur.val);
            cur = cur.next;
        }
        stack.splice(stack.length - n, 1);
        if (stack.length === 0) return null;
        let out = new ListNode(null);
        let ref = out;
        while (stack.length) {
            if (out.val === null) out.val = stack.shift();
            else {
                ref.next = new ListNode(stack.shift());
                ref = ref.next;
            }
        }
        return out;
    }
}
