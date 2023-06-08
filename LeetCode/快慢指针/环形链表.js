/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
//         力扣原型142
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
    let fast = head, slow = head;
    while (true) {
        if (fast == null || fast.next == null) return null;
        fast = fast.next.next;
        slow = slow.next;
        if (slow == fast) {
            break;
        }
    }
    fast = head;
    while (fast != slow) {
        fast = fast.next;
        slow = slow.next;
    }
    return fast;
};

// 第一次相遇fast走的是slow的两倍，所以第一次相遇时 慢指针已经走了nb步   且关键点在于 走a+nb步一定是在环入口
