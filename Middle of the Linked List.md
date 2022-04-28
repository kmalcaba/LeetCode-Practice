---

dateSolved: 2022-04-27
---

# Middle of the Linked List

[Middle of the Linked List - LeetCode](https://leetcode.com/problems/middle-of-the-linked-list/)

## Description

Given the `head` of a singly linked list, return _the middle node of the linked list_.

If there are two middle nodes, return **the second middle** node.

> Example 1
>
> ![](https://assets.leetcode.com/uploads/2021/07/23/lc-midlist1.jpg)
>
> **Input:** head = [1,2,3,4,5]
>
> **Output:** [3,4,5]
>
> **Explanation:** The middle of the list is node 3.

> Example 2
>
> ![](https://assets.leetcode.com/uploads/2021/07/23/lc-midlist2.jpg)
>
> **Input:** [1,2,3,4,5,6]
>
> **Output:** [4,5,6]
>
> **Explanation:** Since the list has two middle nodes with values 3 and 4, we return the second one.

**Constraints:**

- The number of nodes in the list is in the range `[1,100]`.
- `1<=Node.val<=100`

## Solution

**Runtime:** 108 ms
- faster than 8.91% of JavaScript online submissions for Middle of the Linked List

**Memory Usage:** 42.2 MB
- less than 50.11% of JavaScript online submissions for Middle of the Linked List

File name: Middle of the Linked List.js

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
 * @return {ListNode}
 */
var middleNode = function(head) {
    
    const midNode = getMidNode(head);
    
    function getMidNode(node) {
        let slow = node;
        let fast = node;
        
        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
        }
        
        return slow;
    };
    
    return midNode;
};
```