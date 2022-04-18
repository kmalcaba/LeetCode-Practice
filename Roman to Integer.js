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