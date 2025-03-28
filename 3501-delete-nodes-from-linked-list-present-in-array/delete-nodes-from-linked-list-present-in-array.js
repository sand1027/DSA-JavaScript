/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {number[]} nums
 * @param {ListNode} head
 * @return {ListNode}
 */
var modifiedList = function(nums, head) {
    let arr = []
    let temp = head
    while(temp){
        arr.push(temp.val)
        temp = temp.next
    }
    let numSet = new Set(nums)
    let ans = arr.filter(item => !numSet.has(item))
    let newHead = new ListNode(ans[0])
    let curr = newHead
    for(let i = 1; i<ans.length; i++){
        let newNode = new ListNode(ans[i])
        curr.next = newNode
        curr = newNode
    }
    return newHead
};