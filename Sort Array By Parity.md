---
dateSolved: 2022-05-02
---


# Sort Array By Parity

[Sort Array By Parity - LeetCode](https://leetcode.com/problems/sort-array-by-parity)

## Description

Given an integer array `nums`, move all the even integers at the beginning of the array followed by all the odd integers.

Return _**any array** that satisfies this condition_.

> Example 1
>
> **Input:** nums = [3,1,2,4]
>
> **Output:** [2,4,3,1]
>
> **Explanation:** The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.

> Example 2
>
> **Input:** nums = [0]
>
> **Output:** [0]

**Constraints:**

-   `1 <= nums.length <= 5000`
-   `0 <= nums[i] <= 5000`

## Solution

**Runtime:** 82 ms
- faster than 79.92% of JavaScript online submissions for Sort Array By Parity

**Memory Usage:** 45.2 MB 
- less than 22.27% of JavaScript online submissions for Sort Array By Parity

File Name: Sort Array By Parity.js

```js
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    let even = [];
    let odd = [];
    
    even = nums.filter(e => e % 2 == 0);
    odd = nums.filter(e => e % 2 == 1);
    
    even = [...even, ...odd];
    
    return even;
};
```