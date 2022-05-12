---
dateSolved: 2022-05-11
---


# Longest Substring Without Repeating Characters

[Longest Substring Without Repeating Characters - LeetCode](https://leetcode.com/problems/longest-substring-without-repeating-characters/)

## Description

Given a string `s`, find the length of the **longest substring** without repeating characters.

> Example 1
>
> **Input:** s = "abcabcbb"
>
> **Output:** 3
>
> **Explanation:** The answer is "abc", with the length of 3.

> Example 2
>
> **Input:** s = "bbbbb"
>
> **Output:** 1
>
> **Explanation:** The answer is "b", with the length of 1.

> Example 3
>
> **Input:** s = "pwwkew"
>
> **Output:** 3
>
> **Explanation:** The answer is "wke", with the length of 3.
>
> Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

**Constraints:**

-   `0 <= s.length <= 5 * 104`
-   `s` consists of English letters, digits, symbols and spaces.

## Solution

**Sliding Window Technique**
based on [Longest Substring Without Repeating Characters - Leetcode #3 Short & Simple Solution](https://www.code-recipe.com/post/longest-substring-without-repeating-characters)

**Runtime:** 336 ms
- faster than 22.35% of JavaScript online submissions for Longest Substring Without Repeating Characters

**Memory Usage:** 49.6 MB
- less than 18.01% of JavaScript online submissions for Longest Substring Without Repeating Characters

File name: [Longest Substring Without Repeating Characters.md](https://github.com/kmalcaba/LeetCode-Practice/blob/main/Longest%20Substring%20Without%20Repeating%20Characters.js)

```js
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {

    let start = 0; // pointer for the start index of the current substring
    let result = 0;
    let hash = {};
    
    for (let end = 0; end < s.length; end++) {
		    // if current character is in hashmap
        if (s[end] in hash) {
		        // get the length of the current substring (minus last character) and compare with current result
            result = Math.max(s.substring(start, end).length, result);
            
            // update the start index from current character + 1
            start = hash[s[end]] + 1;
            
            // clear the hashmap by removing letters before the substring
            for (h in hash) {
                if (hash[h] < start) {
                    delete hash[h];
                }
            }
        }
        // add the current character in the hashmap along with its index
        hash[s[end]] = end;
    }
    
    result = Math.max(result, s.length - start);
    
    return result;
};
```