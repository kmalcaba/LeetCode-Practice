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