/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let mid = getMidNode(head);
    let start = head;
    let end = reverse(mid);
    
    while (start != null && end != null) {
        if (start.val != end.val) {
            return false;
        }
        
        start = start.next;
        end = end.next;
    }
    
    return true;
    
    function getMidNode(node) {
        let slow = node;
        let fast = node;
        
        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
        }
        
        return slow;
    };
    
    function reverse(head) {
        if (head == null) return null;
        
        let prev = null;
        let curr = head;
        let n = head.next;
        
        while (curr != null) {
            curr.next = prev;
            prev = curr;
            curr = n;
            n = n == null ? null : n.next;
        }
        
        return prev;
    }
};