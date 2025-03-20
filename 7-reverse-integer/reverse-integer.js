/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let temp = Math.abs(x)
    let revNum = 0
    while(temp > 0){
        let digit = temp % 10
        revNum = revNum * 10 + digit
        temp = Math.floor(temp / 10)
    }
    if (revNum < -(2**31) || revNum > (2**31 - 1)) {
        return 0}

    else if(x < 0){
        return -revNum
    }else{
        return revNum
    }

};