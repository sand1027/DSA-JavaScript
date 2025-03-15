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
var middleNode = function(head) {
    let count = 0
    let temp = head
    while(temp){
        temp = temp.next
        count ++
    }
    let mid = Math.floor((count)/2)
    let temp1 = head
    
    while(mid != 0 ){
        
        temp1 = temp1.next
        mid --
    }
    return temp1
    
};

// mistakes : return tmp1.val instead of just returning the node