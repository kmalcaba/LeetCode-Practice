---
dateSolved: 2022-04-27
---


# Number of Steps to Reduce a Number to Zero

[Number of Steps to Reduce a Number to Zero - LeetCode](https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero)

## Description

Given an integer `num`, return _the number of steps to reduce it to zero_.

In one step, if the current number is even, you have to divide it by `2`, otherwise, you have to subtract `1` from it.

> Example 1
> **Input:** num = 14
>
> **Output:** 6
>
> **Explanation:** 
>
> Step 1) 14 is even; divide by 2 and obtain 7. 
>
> Step 2) 7 is odd; subtract 1 and obtain 6.
>
> Step 3) 6 is even; divide by 2 and obtain 3. 
>
> Step 4) 3 is odd; subtract 1 and obtain 2. 
>
> Step 5) 2 is even; divide by 2 and obtain 1. 
>
> Step 6) 1 is odd; subtract 1 and obtain 0.

> Example 2
>
> **Input:** num = 8
>
> **Output:** 4
>
> **Explanation:** 
>
> Step 1) 8 is even; divide by 2 and obtain 4. 
>
> Step 2) 4 is even; divide by 2 and obtain 2. 
>
> Step 3) 2 is even; divide by 2 and obtain 1. 
>
> Step 4) 1 is odd; subtract 1 and obtain 0.

> Example 3
>
> **Input:** num = 123
>
> **Output:** 12

**Constraints:**
- `0<=num<=10^6`

## Solution

**Runtime:** 56 ms

- faster than 96.22% of JavaScript online submissions for Number of Steps to Reduce a Number to Zero

**Memory Usage:** 41.4 MB
- less than 98.25% of JavaScript online submissions for Number of Steps to Reduce a Number to Zero

File name: [Number of Steps to Reduce a Number to Zero.js](https://github.com/kmalcaba/LeetCode-Practice/blob/main/Number%20of%20Steps%20to%20Reduce%20a%20Number%20to%20Zero.js)

```js
/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
    let n = num;
    let count = 0;
    
    count = recursion(n, count);
    
    function recursion (n, count) {
        if (n == 0)
            return count;
        
        if (n % 2 == 0) {
            n = Math.floor(n / 2);
            count++;
            return recursion(n, count);
        } else {
            n--;
            count++;
            return recursion(n, count);
        }
    }
    
    return count;
};
```
