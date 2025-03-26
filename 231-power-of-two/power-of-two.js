/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    for(let i = 0; Math.pow(2, i) <= n;i++){
        let ans = Math.pow(2,i)
        if(ans === n){
            return true
        }
    }
    return false
};