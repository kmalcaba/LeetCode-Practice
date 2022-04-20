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