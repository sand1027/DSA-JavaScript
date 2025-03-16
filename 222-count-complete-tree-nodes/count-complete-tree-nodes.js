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
var countNodes = function(root) {
    let queue = []
    
    let count = 0
    if(!root) return 0
    queue.push(root)
    
    while(queue.length){
        let currNode = queue.shift()
        count ++
        if(currNode.left) queue.push(currNode.left)
        if(currNode.right) queue.push(currNode.right)
    }
    return count
};