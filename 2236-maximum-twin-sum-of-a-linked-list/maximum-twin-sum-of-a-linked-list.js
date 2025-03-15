/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function(head) {
    if(!head) return null
    let arr = []
    let temp = head
    while(temp){
        arr.push(temp.val)
        temp = temp.next
    }
    if(arr.length == 2){
       return  arr[0] + arr[1]
    }
    let n = arr.length
    let max = 0

    for(let i = 0; i<n/2;i++){
        let twinSum = arr[i] + arr[n-1-i]
        max = Math.max(max, twinSum)
    }
    return max
    
};