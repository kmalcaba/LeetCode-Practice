---
dateSolved: 2022-05-02
---

# Add Two Numbers

[Add Two Numbers - LeetCode](https://leetcode.com/problems/add-two-numbers/)

## Description

You are given two **non-empty** linked lists representing two non-negative integers. The digits are stored in **reverse order**, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

> Example 1
>
> ![](https://assets.leetcode.com/uploads/2020/10/02/addtwonumber1.jpg)
>
> **Input:** l1 = [2,4,3], l2 = [5,6,4]
>
> **Output:** [7,0,8]
>
> **Explanation:** 342 + 465 = 807.

> Example 2
>
> **Input:** l1 = [0], l2 = [0]
>
> **Output:** [0]

> Example 3
>
> **Input:** l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
>
> **Output:** [8,9,9,9,0,0,0,1]

**Constraints:**

-   The number of nodes in each linked list is in the range `[1, 100]`.
-   `0 <= Node.val <= 9`
-   It is guaranteed that the list represents a number that does not have leading zeros.

## Solution

Based on: [LeetCode Discussions](https://leetcode.com/problems/add-two-numbers/discuss/2002406/Use-This-Template-to-Solve-The-Question-in-10-Minutes!)

**Runtime:** 5 ms
- faster than 11.02% of Java online submissions for Add Two Numbers

**Memory Usage:** 47.4 MB
- less than 69.48% of Java online submissions for Add Two Numbers

File Name: Add Two Numbers.java

```java
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
```