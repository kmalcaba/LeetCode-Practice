---
dateSolved: 2022-04-20
---

# Fizz Buzz

[Fizz Buzz - LeetCode](https://leetcode.com/problems/fizz-buzz/)

## Description

Given an integer `n`, return _a string array_ `answer` _(**1-indexed**) where_:

-   `answer[i] == "FizzBuzz"` if `i` is divisible by `3` and `5`.
-   `answer[i] == "Fizz"` if `i` is divisible by `3`.
-   `answer[i] == "Buzz"` if `i` is divisible by `5`.
-   `answer[i] == i` (as a string) if none of the above conditions are true.

> Example 1
>
> **Input:** n = 3
>
> **Output:** ["1","2","Fizz"]

> Example 2
>
> **Input:** n = 5
>
> **Output:** ["1","2","Fizz","4","Buzz"]

> Example 3
>
> **Input:** n = 15
>
> **Output:** ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]

**Constraints:**
- $1<=n<=10^4$

## Solution

**Runtime:** 99 ms

- faster than 33.95% of JavaScript online submissions for Fizz Buzz

**Memory Usage:** 44.8 MB

- less than 13.88% of JavaScript online submissions for Fizz Buzz

File name: [Fizz Buzz.js](https://github.com/kmalcaba/LeetCode-Practice/blob/main/Fizz%20Buzz.js)

```js
/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let arr = [];
    for (let i = 1; i <= n; i++) {
        if (i % 3 == 0) {
            if (i % 5 == 0) {
                arr.push("FizzBuzz");
            } else {
                arr.push("Fizz");
            }
        } else if (i % 5 == 0) {
            arr.push("Buzz");
        } else {
            arr.push(i.toString());
        }
    }
    
    return arr;
};
```
