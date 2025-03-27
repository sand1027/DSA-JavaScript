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
var swapNodes = function(head, k) {
    if(!head) return null
    let arr = []
    let temp = head
    while(temp){
        arr.push(temp.val)
        temp = temp.next
    }
    let start = k-1
    let end = arr.length-k

    if (start >= 0 && end >= 0 && start < arr.length && end < arr.length) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
    }

   let newHead = new ListNode(arr[0])
   let curr = newHead
   for(let i = 1; i<arr.length; i++){
    let newNode = new ListNode(arr[i])
    curr.next = newNode
    curr = newNode
   }
   return newHead
    
};