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