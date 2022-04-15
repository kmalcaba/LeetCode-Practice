---
dateSolved: 2022-04-06
---

# Two Sum

[Two Sum - LeetCode](https://leetcode.com/problems/two-sum)

## Description

Given an array of integers `nums` and an integer `target`, return *indices of the two numbers such that they add up to `target`*.

You may assume that each input would have ***exactly*** **one solution**, and you may not use the *same* element twice.

You can return the answer in any order.

> Example 1
> 
> **Input:** nums = [2,7,11,15], target = 9
> 
> **Output:** [0,1]

> Example 2
> 
> **Input:** nums = [3,2,4], target = 6
> 
> **Output:** [1,2]

> Example 3
> 
> **Input:** nums = [3,3], target = 6
> 
> **Output:** [0,1]

**Constraints:**

- `2<=nums.length<=10^4`
- `-10^9<=10^9`
- `-10^9<=target<=10^9`
-   **Only one valid answer exists.**

## Solution

**My solution:** Brute force `O(n^2)`

**Runtime**: 360 ms

- faster than 5.02% of JavaScript online submissions for Two Sum

**Memory Usage**: 42 MB
- less than 96% of JavaScript online submissions for Two Sum

File name: Two Sum v1.js

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
    let isEqualSum = false;
    let answer = [];
    
    for (let i = 0; i <= nums.length; i++) {
        isEqualSum = false;
        
        let num1 = nums[i];
        
        for (let j = 1; j <= nums.length; j++) {
            if (i != j) {
                if (target === num1 + nums[j]) {
                    isEqualSum = true;
                    answer.push(i);
                    answer.push(j);
                    return answer;
                }
            }
        }
    }
};
```

---

**Other solution**: HashMap `O(n)`

[Two Sum](https://www.code-recipe.com/post/two-sum)

**Runtime:** 80 ms

- faster than 81.81% of JavaScript online submissions for Two Sum

**Memory Usage:** 42.5 MB

- less than 71.59% of JavaScript online submissions for Two Sum

> It is possible to solve this problem in linear time. The idea is to make use of a hashmap to store the indices of the elements that are already visited. Hashmap "key" is the number in the given input array (You add this to the hashmap as you visit each element). Hashmap "value" is the index of the number in the array represented by the hashmap key.
>
> For a given input array this algorithm does the following steps:
>
> 1.  Create a hashmap which accepts integer datatype as key and value.
> 2.  Iterate through each element in the given array starting from the first element.
> 3.  In each iteration check if required number (_required number = target sum - current number_) is present in the hashmap.
> 4.  If present, return _{required number index, current number index}_ as result.
> 5.  Otherwise add the current iteration number as _key_ and its index as _value_ to the hashmap. Repeat this until you find the result.

File name: Two Sum v2.js

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let hash = {};

	for (let i = 0; i < nums.length; i++){
        const num1 = nums[i];
		const requiredNum = target - num1;
		if (requiredNum in hash){
			return [hash[requiredNum], i];
		}

		hash[num1] = i;
	}	
};
```
