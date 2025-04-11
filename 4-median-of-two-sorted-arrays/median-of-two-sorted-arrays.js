/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let mergedArr = [...nums1, ...nums2]
    mergedArr.sort((a, b) => a - b)
    let n = mergedArr.length
    let mid = Math.floor(n/2)
   if(n%2 !==0){
    return mergedArr[mid]
   }else{
    return (mergedArr[mid-1]+mergedArr[mid])/2
   }
};