---
dateSolved: 2022-04-11
---

# Palindrome Linked List

[Palindrome Linked List - LeetCode](https://leetcode.com/problems/palindrome-linked-list/)

## Description

Given the `head` of a singly linked list, return `true` if it is a palindrome.

> Example 1
>
> ![](https://assets.leetcode.com/uploads/2021/03/03/pal1linked-list.jpg)
>
> 
>
> **Input:** head = [1,2,2,1]
>
> **Output:** true

> Example 2
>
> ![](https://assets.leetcode.com/uploads/2021/03/03/pal2linked-list.jpg)
>
> 
>
> **Input:** head = [1,2]
>
> **Output:** false

**Constraints:**

- The number of nodes in the list is in the range $[1, 10^5]$.
- $0<=Node.val<=9$

## Solution

**Runtime:** 144 ms
- faster than 93.81% of JavaScript online submissions for Palindrome Linked List

**Memory Usage:** 69.3 MB
- less than 86.26% of JavaScript online submissions for Palindrome Linked List

Based on: [Java | Time: O(N) | Space: O(1)](https://leetcode.com/problems/palindrome-linked-list/discuss/1935933/Java-or-Time%3A-O(N)-or-Space%3A-O(1))

File name: Palindrome Linked List.js

```js
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
```