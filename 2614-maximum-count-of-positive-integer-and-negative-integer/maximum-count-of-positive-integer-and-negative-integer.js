/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function(nums) {
    let posCount = 0
    let negCount = 0
    nums.forEach((item) => {
        if(item > 0)
            posCount++
        else if (item < 0)
            negCount++
    })
   return Math.max(posCount, negCount)
};