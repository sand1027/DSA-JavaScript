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
var minDiffInBST = function(root) {
    let queue = []
    let result = []
    let currNode = root
    queue.push(currNode)
    while(queue.length){
        currNode = queue.shift()
        result.push(currNode.val)
        if(currNode.left) queue.push(currNode.left)
        if(currNode.right) queue.push(currNode.right)
    }
    result.sort((a, b) => a-b)
    let minDiff = Infinity
    for(let i = 0; i< result.length-1; i++){
        minDiff = Math.min(minDiff, result[i+1] - result[i])
    }
    return minDiff
};