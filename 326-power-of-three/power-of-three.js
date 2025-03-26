/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    for(let i = 0; Math.pow(3, i) <= n; i++){
        let ans = Math.pow(3, i)
        if(ans === n){
            return true
        }
    }
    return false
};