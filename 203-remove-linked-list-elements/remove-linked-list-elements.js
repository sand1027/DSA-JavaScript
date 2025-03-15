/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    let prev = head
    let temp = head
    while (head !== null && head.val === val) {
        head = head.next;
    }

    while(temp){
        if(temp.val === val){
            prev.next = temp.next
        }else{
            prev = temp
        }
        temp = temp.next

    }
    
    return head
};