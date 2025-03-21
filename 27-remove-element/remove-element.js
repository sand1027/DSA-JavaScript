/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let filteredArr = nums.filter((item) => item !== val)
    nums.length = 0
    nums.push(...filteredArr)
    return nums.length
};