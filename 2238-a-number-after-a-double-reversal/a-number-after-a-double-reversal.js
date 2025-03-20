/**
 * @param {number} num
 * @return {boolean}
 */
var isSameAfterReversals = function(num) {
    let temp = num
    let revNum = 0
    while(temp > 0){
        let digit = temp%10
        revNum = revNum * 10 + digit
        temp = Math.floor(temp /  10)
    }
    let originalNum = 0
    let curr = revNum
    while(curr > 0){
        let digit = curr%10
        originalNum = originalNum * 10 + digit
        curr = Math.floor(curr/10)
    }
    if(num === originalNum){
        return true
    }else{
        return false
    }

};