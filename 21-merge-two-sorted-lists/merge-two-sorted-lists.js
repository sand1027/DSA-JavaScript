/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    if(!list1) return list2
    if(!list2) return list1
   let temp = list1
   while(temp.next){
    temp = temp.next
   }
   temp.next = list2
   let arr = []
   let curr = list1
   while(curr){
    arr.push(curr.val)
    curr = curr.next
   }
   arr.sort((a, b) => a -b )
   const newHead = new ListNode((arr[0]))
   let nxt = newHead
   for(let i = 1; i< arr.length; i++){
    const newNode = new ListNode(arr[i])
    nxt.next = newNode
    nxt = newNode
   }
   return newHead
};