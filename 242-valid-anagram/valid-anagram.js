/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
if(s.length != t.length) return false
let counter = new Array(26).fill(0)
const base = "a".charCodeAt(0)
for(let i = 0; i<s.length;i++){
    counter[s.charCodeAt(i) - base]++
    counter[t.charCodeAt(i) - base]--
}
if(counter.every(count => count===0)){
    return true
}
return false
};