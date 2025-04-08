/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
    let nums = []
    function traverse(root){
        if(!root) return null
        traverse(root.left)
        nums.push(root.val)
        traverse(root.right)
    }
    traverse(root)
    let start = 0
    let end = nums.length - 1
    while(start < end){
        let sum = nums[start] + nums[end]
        if(sum === k){
            return true
        }else if(sum < k){
            start ++
        }else{
            end --
        }
    }
    return false
};