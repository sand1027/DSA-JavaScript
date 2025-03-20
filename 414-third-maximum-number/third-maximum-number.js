/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let uniqueArr = [...new Set(nums)]
    uniqueArr.sort((a, b) => b - a)
    if(uniqueArr.length < 3){
        return uniqueArr[0]
    }
    let thirdHighest = uniqueArr[2]
    return thirdHighest
};