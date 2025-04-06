/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const strMap = new Map()
    for(s of strs){
        const key = s.split("").sort().join("")
        if(!strMap.has(key)){
            strMap.set(key, [])
        }
        strMap.get(key).push(s)
    }
    return Array.from(strMap.values())
};