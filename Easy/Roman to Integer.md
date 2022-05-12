---
dateSolved: 2022-04-06
---

# Roman to Integer

[Roman to Integer - LeetCode](https://leetcode.com/problems/roman-to-integer/)

## Description

Roman numerals are represented by seven different symbols: `I`, `V`, `X`, `L`, `C`, `D` and `M`.

| Symbol | Value |
|---------|-------|
| I | 1 |
| V | 5 |
| X | 10 |
| L | 50 |
| C | 100 |
| D | 500 |
| M | 1000 |

For example, `2` is written as `II` in Roman numeral, just two one's added together. `12` is written as `XII`, which is simply `X + II`. The number `27` is written as `XXVII`, which is `XX + V + II`.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not `IIII`. Instead, the number four is written as `IV`. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as `IX`. There are six instances where subtraction is used:

-   `I` can be placed before `V` (5) and `X` (10) to make 4 and 9. 
-   `X` can be placed before `L` (50) and `C` (100) to make 40 and 90. 
-   `C` can be placed before `D` (500) and `M` (1000) to make 400 and 900.

Given a roman numeral, convert it to an integer.

> Example 1
>
> **Input:** s = "III"
>
> **Output:** 3

> Example 2
>
> **Input:** s = "LVIII"
>
> **Output:** 58

> Example 3
>
> **Input:** s = "MCMXCIV"
>
> **Output:** 1994

**Constraints:**

- `1<=s.length<=15`
- `s` contains only the characters `('I', 'V', 'X', 'L', 'C', 'D', 'M')`.
- It is **guaranteed** that `s` is a valid roman numeral in the range `[1, 3999]`.

## Solution

**My solution**:

**Runtime:** 288 ms
- faster than 10.93% of JavaScript online submissions for Roman to Integer

**Memory Usage:** 46.8 MB
- less than 79.79% of JavaScript online submissions for Roman to Integer

File name: [Roman to Integer.js](https://github.com/kmalcaba/LeetCode-Practice/blob/main/Roman%20to%20Integer.js)

```js
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    
    const roman = {"I": 1, "V": 5, "X": 10, "L": 50, "C": 100, "D": 500, "M": 1000};
    
    let ans = 0;
    
    for (let i = 0; i < s.length; i++) {
        const c = s.charAt(i);
        const d = s.charAt(i+1);
        
        if(roman[c] < roman[d]) {
            let diff = roman[d] - roman[c];
            ans += diff;
            i++;
        } else {
            ans += roman[c];
        }
    }
    return ans;
};
```
