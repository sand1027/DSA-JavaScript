/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let start = 0
    let end = s.length - 1

    while(start < end){
        let prev = s[start]
        s[start] = s[end]
        s[end] = prev
        start++
        end--
    }
    return s
};