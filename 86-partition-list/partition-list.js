/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    if(!head) return null
    let lowArr = []
    let highArr = []
    let temp = head
    while(temp){
        if(temp.val < x){
            lowArr.push(temp.val)
        }else{
            highArr.push(temp.val)
        }
        temp = temp.next
    }
    let mergedArr = [...lowArr, ...highArr]
    let newHead =new ListNode(mergedArr[0])
    let curr = newHead
    for(let i = 1; i<mergedArr.length;i++){
        let newNode = new ListNode(mergedArr[i])
        curr.next = newNode
        curr = newNode
    }
    return newHead
};