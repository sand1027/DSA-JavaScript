/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let nums = digits.join("")
    nums = BigInt(nums) + 1n
    nums = nums.toString().split("")
    let newArr = nums.map((item) => parseInt(item))
    return newArr
};