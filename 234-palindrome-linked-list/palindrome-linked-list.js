/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let arr = []
    let temp = head
    while(temp){
        arr.push(temp.val)
        temp = temp.next
    }
    let revArr = [...arr].reverse()
    if(arr.join("") == revArr.join("")){
        return true
    }else return false
    
};