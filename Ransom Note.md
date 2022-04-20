---
dateSolved: 2022-04-11
---

# Ransom Note

[Ransom Note - LeetCode](https://leetcode.com/problems/ransom-note/)

## Description

Given two strings `ransomNote` and `magazine`, return `true` _if_ `ransomNote` _can be constructed from_ `magazine` _and_ `false` _otherwise_.

Each letter in `magazine` can only be used once in `ransomNote`.

> Example 1
>
> **Input:** ransomNote = "a", magazine = "b"
>
> **Output:** false

> Example 2
>
> **Input:** ransomNote = "aa", magazine = "ab"
>
> **Output:** false

> Example 3
>
> **Input:** ransomNote = "aa", magazine = "aab"
>
> **Output:** true

**Constraints:**

- $1<=ransomNote.length,magazine.length<=10^5$  
- `ransomNote` and `magazine` consist of lowercase English letters.

## Solution

**My Solution:**

**Runtime:** 117 ms
- faster than 55.50% of JavaScript online submissions for Ransom Note

**Memory Usage:** 49 MB
- less than 16.58% of JavaScript online submissions for Ransom Note

File name: [Ransom Note.js](https://github.com/kmalcaba/LeetCode-Practice/blob/main/Ransom%20Note.js)

```js
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    for (let i = 0; i < ransomNote.length; i++) {
        if (magazine.includes(ransomNote.charAt(i))) {
            magazine = magazine.replace(ransomNote.charAt(i), "");
        } else return false;
    }
    return true;
};
```
