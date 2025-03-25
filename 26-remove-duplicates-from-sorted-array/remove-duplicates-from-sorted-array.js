/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
   let uniqueArr = [...new Set(nums)]
    for(let i = 0; i< uniqueArr.length;i++){
        nums[i] = uniqueArr[i]
    }
   return uniqueArr.length
    
};