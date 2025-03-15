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
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    let result = []
    function traverse(currNode){
        if(!currNode) return null
        result.push(currNode.val)
        traverse(currNode.left)
        traverse(currNode.right)
    }
    traverse(root)
    return result
};