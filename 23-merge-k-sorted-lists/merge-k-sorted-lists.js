/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    if(lists.length === 0) return null
    let ans = []
    for(list of lists){
        let temp = list
        while(temp){
            ans.push(temp.val)
            temp = temp.next
        }
    }
    if(ans.length === 0) return null;
    ans.sort((a, b) => a - b)
    let newHead = new ListNode(ans[0])
    let curr = newHead
    for(let i = 1; i<ans.length; i++){
        let newNode = new ListNode(ans[i])
        curr.next = newNode
        curr = newNode
    }
    return newHead
};