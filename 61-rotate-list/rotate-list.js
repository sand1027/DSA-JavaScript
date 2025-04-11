/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    let length = 0
    let temp = head
    while(temp){
        length++
        temp = temp.next
    }
    k = k%length
    let tail = head
    while(k-- > 0){
        let tail = head
        while(tail.next && tail.next.next){
            tail = tail.next
        }
   
    let newHead = tail.next
    tail.next = null
    newHead.next = head
    head = newHead
    }
    return head
};