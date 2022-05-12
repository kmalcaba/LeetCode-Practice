/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
	  // create a new array with only the sums of each customer
	  // use reduce function to get the sum in the inner array
	  // then map the results into a new array
    let wealth = accounts.map(e => e.reduce((a, b) => a + b, 0));
    // sort the array in descending order
    wealth.sort((a, b) => b - a);
    // return the first (highest) value
    return wealth[0];
};