/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
let subString = []
n = s.length
let maxLength = 0
for(let i = 0; i < n;i++){
    let subStr = ""
    for(let j = i; j<n; j++){
        if(subStr.includes(s[j])){
            break;
        }
        subStr += s[j]
        subString.push(subStr)
        maxLength = Math.max(maxLength, subStr.length)
    }
}
return maxLength

};