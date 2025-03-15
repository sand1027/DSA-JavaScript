/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteMiddle = function(head) {
    let count = 0
    let temp = head
    let prev = head
    if(!head || !head.next) return null
    while(temp){
        temp = temp.next
        count ++
    }
    mid = Math.floor((count)/2)
    temp = head
    while(mid != 0){
        prev = temp
        if(!head) return 
        temp = temp.next
        mid --
    }
    prev.next = temp.next
    return head
    
};