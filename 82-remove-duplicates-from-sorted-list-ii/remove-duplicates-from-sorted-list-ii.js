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
let arr = []
let temp = head

if(!head) return null
while(temp){
    arr.push(temp.val)
    temp = temp.next
}
let freq = {}
for(val of arr){
    freq[val] = (freq[val] || 0) + 1
}
let filArr = arr.filter(item => freq[item] === 1)
if (filArr.length === 0) return null;
let newHead = new ListNode(filArr[0])
let curr = newHead
for(let i = 1; i< filArr.length; i++){
    let newNode = new ListNode(filArr[i])
    curr.next = newNode
    curr = newNode
}
return newHead
};