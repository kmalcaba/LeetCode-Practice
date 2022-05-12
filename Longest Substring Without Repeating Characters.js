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