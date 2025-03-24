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
var deleteDuplicates = function(head) {
    if(!head) return null
    let arr = []
    let temp = head
    while(temp){
        arr.push(temp.val)
        temp = temp.next
    }
   let newArr = [...new Set(arr)]
   let newHead = new ListNode(newArr[0])
   let currNode = newHead
   for(let i = 1; i<newArr.length; i++){
    let newNode = new ListNode(newArr[i])
    currNode.next = newNode
    currNode = newNode
   }
   return newHead
};