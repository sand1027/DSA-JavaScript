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
var sortList = function(head) {
    if(!head) return null
    const arr = []
    let temp = head
    while(temp){
        arr.push(temp.val)
        temp = temp.next
    }
    arr.sort((a, b) => a-b)
    let newHead = new ListNode(arr[0])
    let curr = newHead
   for(let i= 1; i<arr.length; i++){
    let newNode = new ListNode(arr[i])
    curr.next = newNode
    curr = newNode
   }
    return newHead
};