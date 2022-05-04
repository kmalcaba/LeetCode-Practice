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