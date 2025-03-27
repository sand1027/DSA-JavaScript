/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    const arr = []
    let temp = head
    while(temp){
        arr.push(temp.val)
        temp = temp.next
    }
    
    arr.reverse()
     arr.splice(n - 1, 1);
    arr.reverse()
    if(arr.length === 0) return null
    
    let newHead = new ListNode(arr[0])
temp2=newHead
    for(let i =  1; i< arr.length; i++){
        let newNode = new ListNode(arr[i])
        temp2.next = newNode
        temp2 = newNode
    }
    return newHead
};