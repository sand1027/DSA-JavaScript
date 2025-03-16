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
 * @return {number}
 */
var maxDepth = function(root) {
    function traverse(currNode){
        if(!currNode) return 0
        let leftMax = traverse(currNode.left)
        let rightMax = traverse(currNode.right)
        let maxDepth = Math.max(leftMax, rightMax)+1
        return maxDepth
    }
    return traverse(root)
};