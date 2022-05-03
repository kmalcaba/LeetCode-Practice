/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        // initiate a dummy, a tail, and a running carry
        ListNode dummy = new ListNode(0);
        ListNode tail = dummy;
        int carry = 0;
        
        while (l1 != null || l2 != null || carry != 0) {
            int val1 = l1 != null ? l1.val : 0;
            int val2 = l2 != null ? l2.val : 0;

            // get the sum (10 % 10 = 0)
            int sum = (val1 + val2 + carry) % 10;
            // get the carry if it exists
            carry = (int) Math.floor((val1 + val2 + carry) / 10);
            
            tail.next = new ListNode(sum);
            tail = tail.next;
            
            l1 = l1 != null ? l1.next : null;
            l2 = l2 != null ? l2.next : null;
        }
        
        return dummy.next;
    }
}